/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian & Gold Theme
        blackout: '#0a0a0a',
        obsidian: '#0a0a0a',
        'obsidian-light': '#141414',

        // Gold palette
        gold: '#d4af37',
        'gold-light': '#f5d77e',
        'gold-dim': '#d4af3720',
        'gold-muted': '#d4af3760',
        ivory: '#f5f5f0',

        // Legacy neon (keep for compatibility)
        'neon-green': '#39ff14',
        'neon-purple': '#bc13fe',
        'neon-red': '#ff073a',
        'neon-green-dim': '#39ff1440',
        'neon-purple-dim': '#bc13fe40',
        'neon-red-dim': '#ff073a40',

        // Surfaces
        surface: '#121212',
        'surface-elevated': '#1a1a1a',

        // Text
        'text-primary': '#ffffff',
        'text-secondary': '#a0a0a0',
        'text-muted': '#666666',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
