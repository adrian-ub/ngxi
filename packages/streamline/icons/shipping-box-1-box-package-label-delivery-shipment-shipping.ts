import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingBox1BoxPackageLabelDeliveryShipmentShippingIcon],svg[streamline-shipping-box-1-box-package-label-delivery-shipment-shipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M9 .5v5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-5M8.5 11H11"></svg:path></svg:g>`,
})
export class StreamlineShippingBox1BoxPackageLabelDeliveryShipmentShippingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
