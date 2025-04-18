import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBasketUnfillIcon],svg[mdi-basket-unfill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10h3V7H3zm2-5h3V2H5zm3 5h3V7H8zm9-9l-5 5h3v4h4V6h3zM7.5 22c-.78 0-1.46-.45-1.79-1.1L3.1 13.44L3 13a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1l-.04.29l-2.67 7.61c-.33.65-1.01 1.1-1.79 1.1zm.11-2h8.78l2.18-6H5.42z"></svg:path>`,
})
export class MdiBasketUnfillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
