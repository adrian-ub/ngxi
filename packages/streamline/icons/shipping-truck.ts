import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTruckIcon],svg[streamline-shipping-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.5 5.5h3a2 2 0 0 1 2 2v4H12m-10.5 0h-1v-7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7m-.5 0H5.5"></svg:path><svg:path d="M10.25 13.5a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5m-6.75 0a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5"></svg:path></svg:g>`,
})
export class StreamlineShippingTruckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
