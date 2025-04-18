import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCartAltIcon],svg[bx-cart-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4A.8.8 0 0 0 21 4m-2.75 7h-10L6.43 6h13.24z"></svg:path><svg:circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle>`,
})
export class BxCartAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
