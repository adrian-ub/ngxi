import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCreditCardDetailedAltDuotoneIcon],svg[si-credit-card-detailed-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".16" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4V8H1V6.4A2.4 2.4 0 0 1 3.4 4M1 11v6.6A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V11z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M20.6 4H3.4A2.4 2.4 0 0 0 1 6.4v11.2A2.4 2.4 0 0 0 3.4 20h17.2a2.4 2.4 0 0 0 2.4-2.4V6.4A2.4 2.4 0 0 0 20.6 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M23 8H1v3h22z"></svg:path></svg:g>`,
})
export class SiCreditCardDetailedAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
