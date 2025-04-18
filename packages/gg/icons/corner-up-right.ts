import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCornerUpRightIcon],svg[gg-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.372 14.722l1.412 1.417l6.377-6.35l-6.35-6.378l-1.417 1.411l3.776 3.793l-10.305-.022a4 4 0 0 0-4.009 3.991l-.017 8l2 .005l.017-8a2 2 0 0 1 2.004-1.996l10.636.023z"></svg:path>`,
})
export class GgCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
