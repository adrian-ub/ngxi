import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCreditCardIcon],svg[charm-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.75 3.75h12.5v9.5H1.75zm8 6.5h1.5m-9-3h11.5"></svg:path>`,
})
export class CharmCreditCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
