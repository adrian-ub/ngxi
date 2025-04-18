import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastSevenThirtyIcon],svg[fluent-emoji-high-contrast-seven-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17.029 17.732a1.988 1.988 0 1 0-2.739-.759l-2.14 3.706a1 1 0 0 0 1.732 1l1.147-1.986v4.314a1 1 0 1 0 2 0z"></svg:path><svg:path d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14m-3 0c0-6.075-4.925-11-11-11S5 9.925 5 16s4.925 11 11 11s11-4.925 11-11"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastSevenThirtyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
