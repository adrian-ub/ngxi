import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingWarehouseDeliveryWarehouseShippingFulfillmentIcon],svg[streamline-shipping-warehouse-delivery-warehouse-shipping-fulfillment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 4.5h13V13a.5.5 0 0 1-.5.5H1a.5.5 0 0 1-.5-.5V4.5h0Zm0 0h0a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4h0"></svg:path><svg:path d="M11 13.5V8a.5.5 0 0 0-.5-.5h-7A.5.5 0 0 0 3 8v5.5m0-4h8m-8 2h8"></svg:path></svg:g>`,
})
export class StreamlineShippingWarehouseDeliveryWarehouseShippingFulfillmentIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
