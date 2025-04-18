import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeCreditCardIcon],svg[prime-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5.25H5A1.76 1.76 0 0 0 3.25 7v10A1.76 1.76 0 0 0 5 18.75h14A1.76 1.76 0 0 0 20.75 17V7A1.76 1.76 0 0 0 19 5.25M5 6.75h14a.25.25 0 0 1 .25.25v2.25H4.75V7A.25.25 0 0 1 5 6.75m14 10.5H5a.25.25 0 0 1-.25-.25v-6.25h14.5V17a.25.25 0 0 1-.25.25"></svg:path><svg:path fill="currentColor" d="M9 13H7a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2"></svg:path>`,
})
export class PrimeCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
