import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingStore1StoreShopShopsStoresIcon],svg[streamline-shopping-store-1-store-shop-shops-stores-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 8.5V13a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8.5M8 8.5v5M1.5 10H8M.5 4L2 .5h10L13.5 4H.5zm4.25 0v1a2 2 0 0 1-2 2h-.28a2 2 0 0 1-2-2V4m8.78 0v1a2 2 0 0 1-2 2h-.5a2 2 0 0 1-2-2V4m8.75 0v1a2 2 0 0 1-2 2h-.25a2 2 0 0 1-2-2V4"></svg:path>`,
})
export class StreamlineShoppingStore1StoreShopShopsStoresIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
