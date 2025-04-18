import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingStoreSignage2SignStoreShopShopsSignageStoresPoleIcon],svg[streamline-shopping-store-signage-2-sign-store-shop-shops-signage-stores-pole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="7" x=".5" y=".5" rx="2"></svg:rect><svg:path d="M7 13.5v-6"></svg:path></svg:g>`,
})
export class StreamlineShoppingStoreSignage2SignStoreShopShopsSignageStoresPoleIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
