import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastElevenThirtyIcon],svg[fluent-emoji-high-contrast-eleven-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18.02 16.011c0 .735-.398 1.377-.991 1.721v6.275a1 1 0 1 1-2 0v-6.278a1.99 1.99 0 0 1-.736-2.685l-2.143-3.712a1 1 0 1 1 1.732-1l2.13 3.69h.02c1.098 0 1.988.89 1.988 1.99"></svg:path><svg:path d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14m-3 0c0-6.075-4.925-11-11-11S5 9.925 5 16s4.925 11 11 11s11-4.925 11-11"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastElevenThirtyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
