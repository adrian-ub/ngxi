import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faMinusIcon],svg[fa-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 480v192q0 40-28 68t-68 28H96q-40 0-68-28T0 672V480q0-40 28-68t68-28h1216q40 0 68 28t28 68"></svg:path>`,
})
export class FaMinusIcon {
  readonly viewBox = input("0 0 1408 1280")
  readonly width = input("1.11em")
  readonly height = input("1em")
}
