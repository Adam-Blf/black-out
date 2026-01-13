import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines clsx and tailwind-merge for optimal class handling
 * Usage: cn('bg-blackout', isActive && 'text-neon-green', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
