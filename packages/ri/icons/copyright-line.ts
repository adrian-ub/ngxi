import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCopyrightLineIcon],svg[ri-copyright-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.288 9.428A4.999 4.999 0 0 0 7 12a4.999 4.999 0 0 0 9.288 2.572l-1.715-1.028A3 3 0 1 1 12 9c1.093 0 2.05.584 2.573 1.457zM22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10s10-4.48 10-10M4 12c0-4.42 3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8s-8-3.58-8-8"></svg:path>`,
})
export class RiCopyrightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
