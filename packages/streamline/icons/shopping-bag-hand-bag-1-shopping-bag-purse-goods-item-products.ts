import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingBagHandBag1ShoppingBagPurseGoodsItemProductsIcon],svg[streamline-shopping-bag-hand-bag-1-shopping-bag-purse-goods-item-products-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.27 13.5H2.73a2 2 0 0 1-2-2.22l.67-5.89a1 1 0 0 1 1-.89h9.2a1 1 0 0 1 1 .89l.65 5.89a2 2 0 0 1-1.98 2.22Z"></svg:path><svg:path d="M3 4.5a4 4 0 0 1 8 0m-6.5 3h5"></svg:path></svg:g>`,
})
export class StreamlineShoppingBagHandBag1ShoppingBagPurseGoodsItemProductsIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
