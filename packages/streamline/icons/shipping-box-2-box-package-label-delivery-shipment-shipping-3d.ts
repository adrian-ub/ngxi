import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingBox2BoxPackageLabelDeliveryShipmentShipping3dIcon],svg[streamline-shipping-box-2-box-package-label-delivery-shipment-shipping-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v4M8.5 11H11M.5 4.5h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-8h0Z"></svg:path><svg:path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5"></svg:path></svg:g>`,
})
export class StreamlineShippingBox2BoxPackageLabelDeliveryShipmentShipping3dIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
