import { forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/utils'
import type { NeonColor } from '@/types'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'color'> {
  variant?: 'solid' | 'outline' | 'ghost'
  color?: NeonColor
  size?: 'sm' | 'md' | 'lg'
}

const colorStyles: Record<NeonColor, Record<string, string>> = {
  green: {
    solid: 'bg-neon-green text-blackout hover:bg-neon-green/90',
    outline: 'border-neon-green text-neon-green hover:bg-neon-green/10',
    ghost: 'text-neon-green hover:bg-neon-green/10',
  },
  purple: {
    solid: 'bg-neon-purple text-blackout hover:bg-neon-purple/90',
    outline: 'border-neon-purple text-neon-purple hover:bg-neon-purple/10',
    ghost: 'text-neon-purple hover:bg-neon-purple/10',
  },
  red: {
    solid: 'bg-neon-red text-blackout hover:bg-neon-red/90',
    outline: 'border-neon-red text-neon-red hover:bg-neon-red/10',
    ghost: 'text-neon-red hover:bg-neon-red/10',
  },
  gold: {
    solid: 'bg-gold text-blackout font-bold hover:bg-gold-light',
    outline: 'border-gold/60 text-gold hover:bg-gold/10',
    ghost: 'text-gold hover:bg-gold/10',
  },
}

const sizeStyles = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'solid', color = 'green', size = 'md', children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blackout',
          variant === 'outline' && 'border-2 bg-transparent',
          colorStyles[color][variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
