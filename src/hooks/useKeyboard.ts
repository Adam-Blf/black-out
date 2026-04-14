import { useEffect } from 'react'

type KeyMap = Record<string, () => void>

/**
 * Listen to keyboard shortcuts on document.
 * Use key names (e.g. " " for space, "Enter", "Escape").
 */
export function useKeyboard(keymap: KeyMap, enabled = true) {
  useEffect(() => {
    if (!enabled) return
    const handler = (e: KeyboardEvent) => {
      // Ignore if typing in input/textarea
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return
      const fn = keymap[e.key]
      if (fn) {
        e.preventDefault()
        fn()
      }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [keymap, enabled])
}
