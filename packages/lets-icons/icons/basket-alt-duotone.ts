import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBasketAltDuotoneIcon],svg[lets-icons-basket-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M20 10H4a1 1 0 0 1 0-2h16a1 1 0 1 1 0 2M6.802 18.22l-.604-5.44A2 2 0 0 0 4.21 11h15.58a2 2 0 0 0-1.988 1.78l-.604 5.44A2 2 0 0 1 15.21 20H8.79a2 2 0 0 1-1.988-1.78"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="m8.5 3.5l-2 3m9-3l2 3m-7 10l-1-3m4 3l1-3"></svg:path></svg:g>`,
})
export class LetsIconsBasketAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
