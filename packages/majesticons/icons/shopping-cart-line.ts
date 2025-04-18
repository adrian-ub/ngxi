import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsShoppingCartLineIcon],svg[majesticons-shopping-cart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 3h2l.5 3m0 0L7 15h11l3-9z"></svg:path><svg:circle cx="8" cy="20" r="1"></svg:circle><svg:circle cx="17" cy="20" r="1"></svg:circle></svg:g>`,
})
export class MajesticonsShoppingCartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
