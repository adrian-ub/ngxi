export type DarkModePreference = 'auto' | 'dark' | 'light'

export interface DarkModeOptions {
  selector?: string
  attribute?: string
  valueDark?: string
  valueLight?: string
  storageKey?: string
  storage?: Storage
  onChanged?: (resolved: boolean, mode: DarkModePreference) => void
}

export function useDark(options: DarkModeOptions = {}) {
  const {
    selector = 'html',
    attribute = 'class',
    valueDark = 'dark',
    valueLight = '',
    storageKey = 'color-scheme',
    storage = localStorage,
    onChanged,
  } = options

  const el = document.querySelector<HTMLElement>(selector)!
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  let current: DarkModePreference = getStoredPreference() ?? 'auto'

  function getStoredPreference(): DarkModePreference | null {
    const val = storage?.getItem(storageKey)
    return val === 'dark' || val === 'light' || val === 'auto' ? val : null
  }

  function savePreference(pref: DarkModePreference) {
    current = pref
    storage?.setItem(storageKey, pref)
  }

  function getResolved(): boolean {
    if (current === 'auto') {
      return mediaQuery.matches
    }
    return current === 'dark'
  }

  function applyClass() {
    const resolved = getResolved()
    el.setAttribute(attribute, resolved ? valueDark : valueLight)
    onChanged?.(resolved, current)
  }

  function setPreference(pref: DarkModePreference) {
    savePreference(pref)
    applyClass()
  }

  function toggle() {
    const resolved = getResolved()
    if (current === 'auto') {
      // Toggle from auto to opposite of resolved
      setPreference(resolved ? 'light' : 'dark')
    }
    else {
      // Toggle back to auto
      setPreference('auto')
    }
  }

  function init() {
    applyClass()
    if (mediaQuery) {
      mediaQuery.addEventListener('change', () => {
        if (current === 'auto')
          applyClass()
      })
    }
  }

  init()

  return {
    /** true = dark, false = light */
    isDark: (): boolean => getResolved(),
    /** 'auto' | 'dark' | 'light' */
    mode: (): DarkModePreference => current,
    set: setPreference,
    toggle,
  }
}
