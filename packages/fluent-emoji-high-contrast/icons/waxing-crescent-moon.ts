import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastWaxingCrescentMoonIcon],svg[fluent-emoji-high-contrast-waxing-crescent-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22.753 9.013a2.5 2.5 0 0 1 .936 4.686a3 3 0 0 1-.936-4.686"></svg:path><svg:path d="M16.014 1c8.285 0 15 6.716 15 15s-6.715 15-15 15s-15-6.716-15-15s6.716-15 15-15m2.363 2.214a18 18 0 0 1 3.934 5.793a2.5 2.5 0 1 0 1.276 4.745q.142 1.115.142 2.27c0 4.984-2.026 9.495-5.299 12.754a12.95 12.95 0 0 0 5.903-2.785a3.5 3.5 0 0 1 3.67-4.955A13 13 0 0 0 29.014 16c0-6.373-4.585-11.675-10.637-12.786M5.49 23.634a13.05 13.05 0 0 0 5.228 4.242a3.5 3.5 0 0 0-5.228-4.242M15.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-6 9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m7 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastWaxingCrescentMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
