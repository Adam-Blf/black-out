# BlackOut

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Version](https://img.shields.io/badge/version-0.0.1-blue)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6)

Collection de jeux à boire avec une UI premium et des animations fluides.

## Le Borderland

**52 cartes, 4 règles, 0 pitié.**

Tire une carte, découvre son pouvoir. Distribue des gorgées, ou bois-les. Conteste si tu oses. Survie si tu peux.

### Règles par Couleur

| Couleur | Règle | Description |
|---------|-------|-------------|
| **Trèfle** | Le Guess | Carte face cachée. Un joueur devine la valeur. S'il a juste, tu distribues. Sinon, il boit. |
| **Carreau** | L'Action | Donne une action au joueur de ton choix. |
| **Coeur** | La Question | Pose une question au joueur de ton choix. |
| **Pique** | La Contrainte | Donne une contrainte à accomplir au joueur de ton choix. |

### Système de Contest

Conteste la décision et double la mise ! Les niveaux d'escalade multiplient les pénalités :
- Niveau 1 : x1
- Niveau 2 : x2
- Niveau 3 : x4

**As = SHOT** | Autres cartes = gorgées (valeur de la carte)

## Features

- [x] Écran de check-in des joueurs (WelcomeScreen)
- [x] Hub de jeux avec navigation fluide
- [x] Jeu de cartes "Le Borderland" complet
- [x] Système de contest avec escalade
- [x] Animations Framer Motion premium
- [x] Persistence des joueurs (localStorage)
- [x] Dark mode par défaut (thème Obsidian & Gold)
- [x] Responsive mobile-first

## Installation

```bash
# Cloner le repo
git clone https://github.com/Adam-Blf/black-out.git
cd black-out

# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build
```

## Tech Stack

| Technologie | Usage |
|-------------|-------|
| **React 19** | UI Components |
| **TypeScript 5.7** | Type Safety |
| **Vite 6** | Build Tool |
| **Tailwind CSS 3.4** | Styling |
| **Framer Motion 12** | Animations |
| **Zustand 5** | State Management |
| **Lucide React** | Iconographie |

## Architecture

```
src/
├── components/
│   ├── game/           # Composants du jeu (GameBoard, PlayingCard, ContestModal)
│   ├── screens/        # Écrans (WelcomeScreen, HubScreen, RulesScreen)
│   └── ui/             # Composants UI réutilisables (Button)
├── stores/
│   ├── appStore.ts     # Navigation, thème
│   └── gameStore.ts    # État du jeu, joueurs, cartes
├── types/
│   └── index.ts        # Types TypeScript
├── utils/
│   └── cn.ts           # Utility classnames (clsx + tailwind-merge)
└── App.tsx             # Router principal
```

## Flow de Navigation

```
WelcomeScreen (Check-in joueurs)
       │
       ▼
   HubScreen ◄──────────┐
       │                │
       ├─► RulesScreen ─┘
       │
       ▼
   GameBoard
       │
       └─► (Quitter) ───► HubScreen
```

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build production |
| `npm run preview` | Preview du build |
| `npm run lint` | Linter ESLint |

## Changelog

### 2025-01-13
- **feat**: Ajout WelcomeScreen pour check-in des joueurs avant le Hub
- **feat**: Bouton "Modifier les joueurs" dans le header du Hub
- **fix**: Préservation des joueurs lors du reset de partie

### 2025-01-12
- **feat**: Hub screen avec GameCard premium
- **feat**: Rules screen avec animations

### Initial Release
- **feat**: Jeu de cartes "Le Borderland" complet
- **feat**: Système de contest avec escalade
- **feat**: Thème Obsidian & Gold

## Licence

Projet privé - Adam Beloucif

---

*À consommer avec modération*
