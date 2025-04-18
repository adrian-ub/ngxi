import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastFullMoonIcon],svg[fluent-emoji-high-contrast-full-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13c0 1.785-.36 3.486-1.01 5.034a3.5 3.5 0 0 0-3.661 4.948A12.95 12.95 0 0 1 16 29c-1.881 0-3.669-.4-5.283-1.118A3.5 3.5 0 0 0 5.48 23.64A12.94 12.94 0 0 1 3 16M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15s15-6.716 15-15S24.284 1 16 1m1 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-4 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m9.5 1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M19 21.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path><svg:path d="M17 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-4 7a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m9.5 1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M19 21.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15s15-6.716 15-15S24.284 1 16 1M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13c0 1.785-.36 3.486-1.01 5.034a3.5 3.5 0 0 0-3.661 4.948A12.95 12.95 0 0 1 16 29c-1.881 0-3.669-.4-5.283-1.118A3.5 3.5 0 0 0 5.48 23.64A12.94 12.94 0 0 1 3 16"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastFullMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
