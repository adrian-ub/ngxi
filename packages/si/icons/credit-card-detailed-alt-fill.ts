import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siCreditCardDetailedAltFillIcon],svg[si-credit-card-detailed-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 4h17.2A2.4 2.4 0 0 1 23 6.4v11.2a2.4 2.4 0 0 1-2.4 2.4H3.4A2.4 2.4 0 0 1 1 17.6V6.4A2.4 2.4 0 0 1 3.4 4M2 8h20v3H2z" clip-rule="evenodd"></svg:path>`,
})
export class SiCreditCardDetailedAltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
