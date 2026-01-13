import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Supported languages
export const SUPPORTED_LANGUAGES = ['fr', 'en', 'es', 'de', 'it', 'pt'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

// Language display names
export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  fr: 'Francais',
  en: 'English',
  es: 'Espanol',
  de: 'Deutsch',
  it: 'Italiano',
  pt: 'Portugues',
}

// French translations (embedded for instant load - default language)
const frTranslation = {
  common: {
    players: 'joueurs',
    player: 'joueur',
    modify: 'Modifier',
    back: 'Retour',
    play: 'JOUER',
    rules: 'REGLES DU JEU',
    enterCasino: 'ENTRER AU CASINO',
    addPlayer: 'Ajouter un joueur',
    playerPlaceholder: 'Joueur {{number}}',
    minMaxPlayers: 'Minimum 2 joueurs, maximum 8',
    namesUsedForAllGames: 'Ces noms seront utilises pour tous les jeux',
    drinkResponsibly: 'A consommer avec moderation',
    moreGamesSoon: 'Plus de jeux bientot...',
  },
  welcome: {
    title: 'BLACK OUT',
    subtitle: 'Casino de Luxe',
    guestList: 'Guest List',
    highRoller: 'High Roller',
    highRollers: 'High Rollers',
  },
  hub: {
    title: 'BLACK OUT',
    subtitle: 'Collection de jeux a boire',
  },
  borderland: {
    title: 'Le Borderland',
    subtitle: '52 cartes - 4 regles - 0 pitie',
    description: 'Tire une carte, decouvre son pouvoir. Distribue des gorgees, ou bois-les. Conteste si tu oses. Survie si tu peux.',
    cardType: 'Jeu de Cartes',
  },
  rules: {
    title: 'Regles du Borderland',
    intro: 'Chaque couleur de carte a sa propre regle.',
    aceRule: 'Les As valent un SHOT.',
    contest: {
      title: 'Le Contest',
      description: 'Tu peux contester une carte pour doubler la mise ! Le joueur suivant peut accepter ou escalader (x2, puis x4). Celui qui accepte boit tout. Courage ou folie ?',
    },
    suits: {
      clubs: {
        title: 'Le Guess',
        description: 'La carte est FACE CACHEE. Demande a un joueur de deviner sa valeur exacte (ex: Roi). Clique pour reveler. S\'il a juste, tu distribues. Sinon, il boit.',
      },
      diamonds: {
        title: 'L\'Action',
        description: 'Donne une action au joueur de ton choix.',
      },
      hearts: {
        title: 'La Question',
        description: 'Pose une question au joueur de ton choix.',
      },
      spades: {
        title: 'La Contrainte',
        description: 'Donne une contrainte a accomplir au joueur de ton choix.',
      },
    },
  },
  game: {
    gorgees: 'gorgees',
    shot: 'SHOT',
    sips: 'sips',
    draw: 'TIRER',
    distribute: 'Distribue',
    drink: 'Bois',
    contest: 'CONTESTER',
    accept: 'ACCEPTER',
    escalate: 'ESCALADER',
    reveal: 'Touche pour reveler',
    correct: 'Correct !',
    wrong: 'Rate !',
    youDistribute: 'Tu distribues',
    youDrink: 'Tu bois',
    nextPlayer: 'Joueur suivant',
    gameOver: 'Partie terminee !',
    playAgain: 'Rejouer',
    backToHub: 'Retour au Hub',
  },
}

// Initialize i18next with embedded French translations
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frTranslation },
    },
    fallbackLng: 'fr',
    supportedLngs: SUPPORTED_LANGUAGES,
    nonExplicitSupportedLngs: false,

    // If detected language is not supported, use French
    load: 'languageOnly',

    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'blackout-lang',
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: false, // Disable suspense for instant render
    },

    debug: import.meta.env.DEV,
  })

// Force French if detected language is not supported
const detectedLang = i18n.language?.split('-')[0] as SupportedLanguage
if (!SUPPORTED_LANGUAGES.includes(detectedLang)) {
  i18n.changeLanguage('fr')
}

export default i18n
