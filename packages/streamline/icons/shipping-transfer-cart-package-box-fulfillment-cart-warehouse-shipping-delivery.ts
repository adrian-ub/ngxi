import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTransferCartPackageBoxFulfillmentCartWarehouseShippingDeliveryIcon],svg[streamline-shipping-transfer-cart-package-box-fulfillment-cart-warehouse-shipping-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="6.5" height="6.5" x="5.5" y="3" rx="1"></svg:rect><svg:path d="M4 12h7.61a1 1 0 0 1 .7.29l1.19 1.21M.5.5h1a1 1 0 0 1 1 1V10M4 11.75A2.11 2.11 0 0 1 4 12a1.74 1.74 0 1 1 0-.25ZM8.5 7h1"></svg:path></svg:g>`,
})
export class StreamlineShippingTransferCartPackageBoxFulfillmentCartWarehouseShippingDeliveryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
