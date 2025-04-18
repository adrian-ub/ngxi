import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elCreditCardIcon],svg[el-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M-2.031 202.672V452.36h1204.062V202.672zm0 363.781v430.875h1204.062V566.453zm131.562 189.25h453.688v136.938H129.531z"></svg:path>`,
})
export class ElCreditCardIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
