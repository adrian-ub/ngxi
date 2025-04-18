import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastTwelveThirtyIcon],svg[fluent-emoji-high-contrast-twelve-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.029 17.732a1.988 1.988 0 0 0 0-3.442v-4.253a1 1 0 1 0-2 0v4.256a1.988 1.988 0 0 0 0 3.436v6.278a1 1 0 1 0 2 0z"></svg:path><svg:path d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14s14-6.268 14-14m-3 0c0 6.075-4.925 11-11 11S5 22.075 5 16S9.925 5 16 5s11 4.925 11 11"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastTwelveThirtyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
