import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCreditCardIcon],svg[oi-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.25 1C.11 1 0 1.11 0 1.25V2h8v-.75C8 1.11 7.89 1 7.75 1zM0 3v3.75c0 .14.11.25.25.25h7.5c.14 0 .25-.11.25-.25V3zm1 2h1v1H1zm2 0h1v1H3z"></svg:path>`,
})
export class OiCreditCardIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
