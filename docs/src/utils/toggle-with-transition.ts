export function toggleWithTransition(
  toggleFn: () => void,
  isDark: () => boolean,
  event?: MouseEvent,
) {
  const supportsTransition
    = typeof document !== 'undefined'
    // @ts-expect-error experimental
      && document.startViewTransition
      && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!supportsTransition || !event) {
    toggleFn()
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  )

  const transition = document.startViewTransition(async () => {
    toggleFn()
    await Promise.resolve()
  })

  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]

    document.documentElement.animate(
      {
        clipPath: isDark()
          ? [...clipPath].reverse()
          : clipPath,
      },
      {
        duration: 400,
        easing: 'ease-in',
        pseudoElement: isDark()
          ? '::view-transition-old(root)'
          : '::view-transition-new(root)',
      },
    )
  })
}
