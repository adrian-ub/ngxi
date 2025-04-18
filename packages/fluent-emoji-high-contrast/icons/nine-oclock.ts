import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastNineOclockIcon],svg[fluent-emoji-high-contrast-nine-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.031 18a1.989 1.989 0 0 0 .998-3.71V8.016a1 1 0 1 0-2 0v6.277a2 2 0 0 0-.71.707h-4.286a1 1 0 0 0 0 2h4.272c.343.598.988 1 1.726 1"></svg:path><svg:path d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14s14-6.268 14-14m-3 0c0 6.075-4.925 11-11 11S5 22.075 5 16S9.925 5 16 5s11 4.925 11 11"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastNineOclockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
