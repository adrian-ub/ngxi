import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCreditCardIcon],svg[ic-sharp-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4H2.01L2 20h20zm-2 14H4v-6h16zm0-10H4V6h16z"></svg:path>`,
})
export class IcSharpCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
