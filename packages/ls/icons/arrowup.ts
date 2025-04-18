import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsArrowupIcon],svg[ls-arrowup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M251.378 694h215c26 0 45-20 45-46V398h170c16 0 28-8 34-23c2-5 2-8 2-12c0-10-3-18-10-25l-324-323c-11-15-36-14-50 0l-323 323c-22 20-7 60 26 60h171v250c0 26 18 46 44 46"></svg:path>`,
})
export class LsArrowupIcon {
  readonly viewBox = input("0 0 718 694")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
