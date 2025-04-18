import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTransferTruckTruckShippingDeliveryIcon],svg[streamline-shipping-transfer-truck-truck-shipping-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 5.5h-3a2 2 0 0 0-2 2v4H2m10.5 0h1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5.68M6 11.5h2.5"></svg:path><svg:circle cx="4" cy="11.5" r="2"></svg:circle><svg:circle cx="10.5" cy="11.5" r="2"></svg:circle></svg:g>`,
})
export class StreamlineShippingTransferTruckTruckShippingDeliveryIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
