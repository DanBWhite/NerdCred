// Shared sample data for Round 1

export const LEADERBOARD = {
  all: [
    { userId: 'u1', username: 'TrophyHunter', points: 18420, avgRarity: 12.4, platform: 'all' },
    { userId: 'u2', username: 'SteamMaster', points: 15210, avgRarity: 8.1, platform: 'all' },
    { userId: 'u3', username: 'RetroKing', points: 12880, avgRarity: 15.7, platform: 'all' }
  ],
  playstation: [
    { userId: 'u1', username: 'TrophyHunter', points: 9200, avgRarity: 18.2, platform: 'playstation' }
  ],
  steam: [
    { userId: 'u2', username: 'SteamMaster', points: 7100, avgRarity: 6.4, platform: 'steam' }
  ],
  retro: [
    { userId: 'u3', username: 'RetroKing', points: 5400, avgRarity: 22.1, platform: 'retro' }
  ]
}

export const RECOMMENDATIONS = [
  { gameName: 'God of War Ragnarök', achievementName: 'The Bear and the Wolf', platform: 'playstation', rarity: 4.2, imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3biUq9O2iA9Q7i3G1E.png' },
  { gameName: 'Elden Ring', achievementName: 'Elden Lord', platform: 'steam', rarity: 2.1, imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg' },
  { gameName: 'Super Mario World', achievementName: 'Master of the Stars', platform: 'retro', rarity: 0.8, imageUrl: 'https://media.retroachievements.org/Images/000001.png' }
]

export const TRENDING = {
  playstation: [
    { gameName: 'Spider-Man 2', achievementName: 'Be Greater', platform: 'playstation', unlocks7d: 8420, imageUrl: 'https://image.api.playstation.com/vulcan/ap/rnd/202306/1219/1c7b75d8ed9271516546560d219ad0b22ee0a263b4537bd8.png' }
  ],
  steam: [
    { gameName: 'Baldur\'s Gate 3', achievementName: 'Foehammer', platform: 'steam', unlocks7d: 12500, imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg' }
  ],
  retro: [
    { gameName: 'The Legend of Zelda', achievementName: 'Hero of Hyrule', platform: 'retro', unlocks7d: 3100, imageUrl: 'https://media.retroachievements.org/Images/000002.png' }
  ]
}
