import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastWatchIcon],svg[fluent-emoji-high-contrast-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 8a1 1 0 0 0-1 1v5.268a2 2 0 0 0-.864 2.46l-2.226 2.481a1 1 0 0 0 1.49 1.336l2.301-2.567q.147.021.299.022a2 2 0 0 0 1-3.732V9a1 1 0 0 0-1-1"></svg:path><svg:path d="M9 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3.252A12 12 0 0 1 27.834 14h.666a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.666A12 12 0 0 1 23 25.748V29a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-3.252A11.98 11.98 0 0 1 4 16c0-4.015 1.972-7.57 5-9.748zm16 13a9 9 0 1 0-18 0a9 9 0 0 0 18 0"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastWatchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
