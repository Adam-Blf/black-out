import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import type { Card, Suit } from '@/types'
import { SUIT_SYMBOLS } from '@/types'
import { cn } from '@/utils'

export interface PlayingCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  card: Card
  faceUp?: boolean
  size?: 'sm' | 'md' | 'lg'
  isHighlighted?: boolean
  onFlipComplete?: () => void
}

const suitColorMap: Record<Suit, { text: string; glow: string; glowClass: string }> = {
  hearts: { text: 'text-neon-red', glow: 'text-glow-red', glowClass: 'glow-red' },
  diamonds: { text: 'text-neon-red', glow: 'text-glow-red', glowClass: 'glow-red' },
  clubs: { text: 'text-neon-purple', glow: 'text-glow-purple', glowClass: 'glow-purple' },
  spades: { text: 'text-neon-green', glow: 'text-glow-green', glowClass: 'glow-green' },
}

const sizeStyles = {
  sm: { container: 'w-20 h-28', rank: 'text-lg', symbol: 'text-3xl', corner: 'text-xs' },
  md: { container: 'w-28 h-40', rank: 'text-2xl', symbol: 'text-5xl', corner: 'text-sm' },
  lg: { container: 'w-36 h-52', rank: 'text-4xl', symbol: 'text-7xl', corner: 'text-base' },
}

const cardVariants = {
  hidden: {
    rotateY: 180,
    opacity: 0,
  },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: {
      rotateY: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
      opacity: { duration: 0.3 },
    },
  },
  exit: {
    rotateY: -180,
    opacity: 0,
    transition: { duration: 0.4 },
  },
}

export const PlayingCard = forwardRef<HTMLDivElement, PlayingCardProps>(
  ({ card, faceUp = true, size = 'md', isHighlighted, onFlipComplete, className, ...props }, ref) => {
    const { suit, rank } = card
    const symbol = SUIT_SYMBOLS[suit]
    const colors = suitColorMap[suit]
    const sizeStyle = sizeStyles[size]

    return (
      <motion.div
        ref={ref}
        className={cn('perspective-1000', sizeStyle.container, className)}
        {...props}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          initial="hidden"
          animate={faceUp ? 'visible' : 'hidden'}
          variants={cardVariants}
          onAnimationComplete={onFlipComplete}
        >
          {/* Front Face */}
          <div
            className={cn(
              'absolute inset-0 backface-hidden rounded-xl',
              'bg-surface border-2 border-text-muted/30',
              'flex flex-col justify-between p-2',
              colors.text,
              isHighlighted && colors.glowClass
            )}
          >
            {/* Top Left Corner */}
            <div className="flex flex-col items-start leading-none">
              <span className={cn('font-bold', sizeStyle.corner, colors.glow)}>
                {rank}
              </span>
              <span className={sizeStyle.corner}>{symbol}</span>
            </div>

            {/* Center Symbol */}
            <div className="flex-1 flex items-center justify-center">
              <span className={cn(sizeStyle.symbol, colors.glow)}>
                {symbol}
              </span>
            </div>

            {/* Bottom Right Corner (rotated) */}
            <div className="flex flex-col items-end leading-none rotate-180">
              <span className={cn('font-bold', sizeStyle.corner, colors.glow)}>
                {rank}
              </span>
              <span className={sizeStyle.corner}>{symbol}</span>
            </div>
          </div>

          {/* Back Face */}
          <div
            className={cn(
              'absolute inset-0 backface-hidden rounded-xl rotate-y-180',
              'bg-surface border-2 border-neon-purple/50',
              'overflow-hidden'
            )}
          >
            {/* Pattern Background */}
            <div className="absolute inset-2 rounded-lg card-back-pattern opacity-60" />

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full border-2 border-neon-purple flex items-center justify-center">
                <span className="text-neon-purple text-xl font-bold">B</span>
              </div>
            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="w-full h-1 bg-gradient-to-b from-transparent via-neon-green/20 to-transparent animate-scanline" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    )
  }
)

PlayingCard.displayName = 'PlayingCard'
