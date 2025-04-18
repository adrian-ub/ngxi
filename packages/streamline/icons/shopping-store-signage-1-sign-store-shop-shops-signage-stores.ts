import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingStoreSignage1SignStoreShopShopsSignageStoresIcon],svg[streamline-shopping-store-signage-1-sign-store-shop-shops-signage-stores-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="8" x=".5" y="5.5" rx="2"></svg:rect><svg:path d="m4 5.5l3-5l3 5"></svg:path></svg:g>`,
})
export class StreamlineShoppingStoreSignage1SignStoreShopShopsSignageStoresIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
