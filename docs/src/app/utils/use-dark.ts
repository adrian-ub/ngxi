import { computed, effect, signal } from '@angular/core'

export type DarkModePreference = 'auto' | 'dark' | 'light'

export function useDark(options?: {
  selector?: string
  attribute?: string
  valueDark?: string
  valueLight?: string
  storageKey?: string
  storage?: Storage
  onChanged?: (resolved: boolean, mode: DarkModePreference) => void
}) {
  const {
    selector = 'html',
    attribute = 'class',
    valueDark = 'dark',
    valueLight = '',
    storageKey = 'color-scheme',
    storage = localStorage,
    onChanged,
  } = options || {}

  const el = document.querySelector<HTMLElement>(selector)!
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const mediaMatches = signal(mediaQuery.matches)

  mediaQuery.addEventListener('change', (e) => {
    mediaMatches.set(e.matches)
  })

  const preference = signal<DarkModePreference>(getStoredPreference() ?? 'auto')

  const isDark = computed(() => {
    const pref = preference()
    return pref === 'auto' ? mediaMatches() : pref === 'dark'
  })

  function getStoredPreference(): DarkModePreference | null {
    const val = storage.getItem(storageKey)
    return val === 'dark' || val === 'light' || val === 'auto' ? val : null
  }

  function savePreference(pref: DarkModePreference) {
    preference.set(pref)
    storage.setItem(storageKey, pref)
  }

  function applyClass() {
    const active = isDark() ? valueDark : valueLight
    el.setAttribute(attribute, active)
    onChanged?.(isDark(), preference())
  }

  effect(() => {
    applyClass()
  })

  function setPreference(pref: DarkModePreference) {
    savePreference(pref)
  }

  function toggle() {
    const current = preference()
    if (current === 'auto') {
      setPreference(isDark() ? 'light' : 'dark')
    }
    else {
      setPreference('auto')
    }
  }

  return {
    isDark,
    mode: preference,
    toggle,
    setPreference,
  }
}
