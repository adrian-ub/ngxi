import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCreditCardIcon],svg[mage-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.139 3.778H6.86a4.11 4.11 0 0 0-4.111 4.11v8.223a4.11 4.11 0 0 0 4.111 4.111h10.28a4.11 4.11 0 0 0 4.111-4.11V7.888a4.11 4.11 0 0 0-4.111-4.111m4.11 5.14H2.75m3.468 7.194h5.139"></svg:path>`,
})
export class MageCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
