import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMathIcon],svg[bx-math-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2H5v3H2v2h3v3h2V7h3V5H7zm7 3h8v2h-8zm0 10h8v2h-8zm0 4h8v2h-8zm-5.71-4.71L6 16.59l-2.29-2.3l-1.42 1.42L4.59 18l-2.3 2.29l1.42 1.42L6 19.41l2.29 2.3l1.42-1.42L7.41 18l2.3-2.29z"></svg:path>`,
})
export class BxMathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
