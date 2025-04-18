import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastFirstQuarterMoonIcon],svg[fluent-emoji-high-contrast-first-quarter-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M22.5 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path d="M1 16C1 7.716 7.716 1 16 1s15 6.716 15 15s-6.716 15-15 15S1 24.284 1 16M16 4.085a1.5 1.5 0 0 1 0 2.83V19.05a2.5 2.5 0 0 1 1 0a2.5 2.5 0 0 1-1 4.9V29c3.169 0 6.073-1.134 8.328-3.018a3.5 3.5 0 0 1 3.661-4.948A13 13 0 0 0 29 16c0-7.18-5.82-13-13-13zm0 0a1.5 1.5 0 1 0 0 2.83zm0 14.965a2.5 2.5 0 0 0 0 4.9zm-5.283 8.832A3.5 3.5 0 0 0 5.48 23.64a13.05 13.05 0 0 0 5.236 4.24M13 12.5a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastFirstQuarterMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
