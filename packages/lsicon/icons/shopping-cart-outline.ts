import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconShoppingCartOutlineIcon],svg[lsicon-shopping-cart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M6 6.5h4m-4 2h4m-6-4h9.5l-1 6h-9l-1-8H1m9.25 9.75a1.06 1.06 0 1 0 1.5 1.5a1.06 1.06 0 0 0-1.5-1.5Zm-6 0a1.06 1.06 0 1 0 1.5 1.5a1.06 1.06 0 0 0-1.5-1.5Z"></svg:path>`,
})
export class LsiconShoppingCartOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
