#!/bin/bash
# Deploy Nerdcred (Next.js) to EC2
# Usage: ./deploy.sh user@ec2-ip-or-hostname
# Example: ./deploy.sh ubuntu@54.123.45.67

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 user@host"
  echo "Example: $0 ubuntu@54.123.45.67"
  exit 1
fi

REMOTE="$1"
REMOTE_USER=$(echo "$REMOTE" | cut -d@ -f1)
REMOTE_DIR="/home/$REMOTE_USER/nerdcred"

echo "=== Building Next.js locally ==="
npm install
npm run build

echo "=== Syncing standalone build to $REMOTE ==="
# Next.js standalone output lives in .next/standalone
rsync -avz --delete \
  --exclude node_modules \
  --exclude .git \
  .next/standalone/ \
  .next/static/ \
  public/ \
  package.json \
  "$REMOTE:$REMOTE_DIR/"

# Also copy the static folder into the right place for standalone
ssh "$REMOTE" << EOF
  set -e
  mkdir -p $REMOTE_DIR
  cd $REMOTE_DIR
  # Standalone expects .next/static to be at the same level as server.js
  mkdir -p .next
  if [ -d static ]; then
    mv static .next/static || true
  fi
  # Install any missing production deps if needed (standalone usually includes them)
  if [ ! -d node_modules ]; then
    npm install --production || true
  fi
  if command -v pm2 >/dev/null 2>&1; then
    pm2 restart nerdcred || pm2 start server.js --name nerdcred
  else
    echo "pm2 not found. Start with: node server.js"
    echo "Or install: sudo npm install -g pm2"
  fi
EOF

echo "=== Done ==="
echo "App should be available at http://$(echo $REMOTE | cut -d@ -f2):3000"
echo "Make sure port 3000 is open in the EC2 security group."
