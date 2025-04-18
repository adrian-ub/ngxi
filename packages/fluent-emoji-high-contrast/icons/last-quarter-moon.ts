import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastLastQuarterMoonIcon],svg[fluent-emoji-high-contrast-last-quarter-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 12.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15s15-6.716 15-15S24.284 1 16 1M3 16C3 8.82 8.82 3 16 3v1.085a1.5 1.5 0 0 0-1 0a1.5 1.5 0 0 0 1 2.83V19.05q.243-.05.5-.05a2.5 2.5 0 1 1-.5 4.95v-4.9a2.5 2.5 0 0 0 0 4.9V29c-1.881 0-3.669-.4-5.283-1.118A3.5 3.5 0 0 0 5.48 23.64A12.94 12.94 0 0 1 3 16m21.328 9.982a3.5 3.5 0 0 1 3.661-4.948a13.04 13.04 0 0 1-3.66 4.948M16 6.915v-2.83a1.5 1.5 0 0 1 0 2.83m9 4.585a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastLastQuarterMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
