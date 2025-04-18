import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketFillIcon],svg[lets-icons-basket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 5V3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 8H2v3c.375 0 .563 0 .728.028a2 2 0 0 1 1.521 1.22c.063.155.103.338.185.704l.87 3.916c.334 1.501.5 2.252 1.049 2.692S7.67 20 9.209 20h5.582c1.539 0 2.308 0 2.856-.44c.549-.44.715-1.19 1.05-2.692l.87-3.916c.08-.366.121-.549.184-.704a2 2 0 0 1 1.521-1.22C21.437 11 21.625 11 22 11zM9.486 12.836a1 1 0 1 0-1.972.328l.5 3a1 1 0 1 0 1.972-.328zm7 .328a1 1 0 1 0-1.973-.328l-.5 3a1 1 0 1 0 1.973.328z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class LetsIconsBasketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
