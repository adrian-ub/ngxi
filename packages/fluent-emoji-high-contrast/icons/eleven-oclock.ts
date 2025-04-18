import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastElevenOclockIcon],svg[fluent-emoji-high-contrast-eleven-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13.882 10.332a1 1 0 1 0-1.732 1l2.143 3.712a1.989 1.989 0 1 0 2.736-.753V8.015a1 1 0 1 0-2 0v4.302z"></svg:path><svg:path d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14m-3 0c0-6.075-4.925-11-11-11S5 9.925 5 16s4.925 11 11 11s11-4.925 11-11"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastElevenOclockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
