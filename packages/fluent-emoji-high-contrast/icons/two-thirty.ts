import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastTwoThirtyIcon],svg[fluent-emoji-high-contrast-two-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.02 16.011c0 .735-.398 1.377-.991 1.721v6.275a1 1 0 1 1-2 0v-6.278a1.988 1.988 0 0 1 1.002-3.707c.354 0 .686.093.974.255l3.663-2.115a1 1 0 0 1 1 1.732L18.02 16z"></svg:path><svg:path d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14s14-6.268 14-14m-3 0c0 6.075-4.925 11-11 11S5 22.075 5 16S9.925 5 16 5s11 4.925 11 11"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastTwoThirtyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
