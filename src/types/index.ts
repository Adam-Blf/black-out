export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export type NeonColor = 'green' | 'purple' | 'red'

export interface ThemeColors {
  blackout: string
  neonGreen: string
  neonPurple: string
  neonRed: string
}

// ============================================
// Le Borderland Card Game Types
// ============================================

/** Card suits */
export type Suit = 'clubs' | 'diamonds' | 'hearts' | 'spades'

/** French suit names for display */
export const SUIT_FRENCH_NAMES: Record<Suit, string> = {
  clubs: 'Trefle',
  diamonds: 'Carreau',
  hearts: 'Coeur',
  spades: 'Pique',
} as const

/** Suit symbols for UI display */
export const SUIT_SYMBOLS: Record<Suit, string> = {
  clubs: '\u2663',
  diamonds: '\u2666',
  hearts: '\u2665',
  spades: '\u2660',
} as const

/** Card ranks from Ace to King */
export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'

/** Unit type for penalties */
export type PenaltyUnit = 'gorgees' | 'SHOT'

/** A single playing card */
export interface Card {
  /** Unique identifier (e.g., 'clubs-A', 'hearts-10') */
  id: string
  /** Card suit */
  suit: Suit
  /** Card rank */
  rank: Rank
  /** Numeric value (A=1, 2-10=face, J=11, Q=12, K=13) */
  value: number
  /** Penalty unit - CRITICAL: Ace MUST be 'SHOT', all others 'gorgees' */
  unit: PenaltyUnit
}

/** A player in the game */
export interface Player {
  /** Unique identifier */
  id: string
  /** Display name */
  name: string
  /** Whether player is still in the game */
  active: boolean
}

/** Contest/Duel escalation levels */
export type ContestLevel = 0 | 1 | 2 | 3

/** Contest multipliers by level */
export const CONTEST_MULTIPLIERS: Record<ContestLevel, number> = {
  0: 1,
  1: 1,
  2: 2,
  3: 4,
} as const

/** Current state of a contest/duel */
export interface ContestState {
  /** Whether a contest is currently active */
  active: boolean
  /** Current escalation level (0-3) */
  level: ContestLevel
  /** The card being contested */
  baseCard: Card | null
  /** Player who initiated or last escalated the contest */
  challenger: Player | null
}

/** Game phases */
export type GamePhase = 'setup' | 'playing' | 'contest' | 'resolution' | 'ended'

/** French rule texts for each suit */
export interface SuitRule {
  title: string
  description: string
}

export const SUIT_RULES: Record<Suit, SuitRule> = {
  clubs: {
    title: 'Guess',
    description: 'Devine si la prochaine carte est plus haute ou plus basse',
  },
  diamonds: {
    title: 'Action',
    description: 'Fais une action (le groupe decide)',
  },
  hearts: {
    title: 'Question',
    description: 'Reponds a une question embarrassante',
  },
  spades: {
    title: 'Contrainte',
    description: 'Accomplis une contrainte decidee par le groupe',
  },
} as const

/** Complete game state */
export interface GameState {
  /** Remaining cards in deck */
  deck: Card[]
  /** Cards that have been played */
  discardPile: Card[]
  /** All players */
  players: Player[]
  /** Index of current player in players array */
  currentPlayerIndex: number
  /** Currently drawn card */
  currentCard: Card | null
  /** Contest/duel state */
  contestState: ContestState
  /** Current phase of the game */
  gamePhase: GamePhase
}

/** Result of a penalty calculation */
export interface PenaltyResult {
  amount: number
  unit: PenaltyUnit
  displayText: string
}
