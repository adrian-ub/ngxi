import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTransferTruckTimeTruckShippingDeliveryTimeWaitingDelayIcon],svg[streamline-shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="6" cy="12.49" r="1"></svg:circle><svg:circle cx="10.5" cy="12.49" r="1"></svg:circle><svg:path d="M8.38 3.53A4 4 0 1 0 2 7.62m2.5-3.11L6 3.01m.5 6.49v-1H5a2 2 0 0 0-2 2v2"></svg:path><svg:path d="M13.5 12.49v-5a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v2"></svg:path></svg:g>`,
})
export class StreamlineShippingTransferTruckTimeTruckShippingDeliveryTimeWaitingDelayIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
