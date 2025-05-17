const icons = [
  "✨",
  "🔥",
  "🌟",
  "🌈",
  "🍀",
  "🎯",
  "🚀",
  "💡",
  "🎉",
  "💎",
  "🌸",
  "🧠",
  "📚",
  "🎨",
  "🎵",
  "⚡",
  "🐳",
  "🦄",
  "🎮",
  "🪐",
];
export const getRandomIcon = () =>
  icons[Math.floor(Math.random() * icons.length)];
