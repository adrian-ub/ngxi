import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsCartAltIcon],svg[bx-bxs-cart-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 4H2v2h2.3l3.521 9.683A2.004 2.004 0 0 0 9.7 17H18v-2H9.7l-.728-2H18c.4 0 .762-.238.919-.606l3-7A.998.998 0 0 0 21 4z" fill="currentColor"></svg:path><svg:circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxBxsCartAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
