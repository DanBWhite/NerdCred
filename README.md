# Nerdcred — Next.js Version (Round 1)

Rewritten in **Next.js 15** (App Router) with the same Round 1 features:
- Leaderboard (platform tabs)
- Popular with hunters (recommendations)
- Trending unlocks (last 7 days)

Sample data lives in `lib/data.js` and is served via API routes (`/api/leaderboard`, `/api/recommendations`, `/api/trending`).

## Local development
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to EC2 (build locally → push)

### One-time on EC2
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
mkdir -p ~/nerdcred
```
Open port **3000** in the security group.

### Deploy
```bash
chmod +x deploy.sh
./deploy.sh ubuntu@YOUR_EC2_IP
```

The script:
1. Builds the Next.js app locally (`next build` with `output: 'standalone'`)
2. rsyncs the standalone output to the instance
3. Restarts with pm2

After deploy, visit `http://<EC2-IP>:3000`.

### Manual alternative
```bash
npm install && npm run build
# Then rsync .next/standalone, .next/static, etc. and run `node server.js` on the server
```

## Notes
- Uses Next.js standalone output for a simple Node process on EC2 (no need for a separate reverse proxy for Round 1).
- Images are unoptimized to keep the EC2 setup minimal.
- All interactive parts are client components; data is fetched from the co-located API routes.
