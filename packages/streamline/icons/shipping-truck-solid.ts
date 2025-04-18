import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShippingTruckSolidIcon],svg[streamline-shipping-truck-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.247 5.226H11.5a2.5 2.5 0 0 1 2.5 2.5v4a.5.5 0 0 1-.5.5h-1.444a1.81 1.81 0 0 1-3.62 0H5a1.81 1.81 0 0 1-3.62 0H.5a.5.5 0 0 1-.5-.5v-7a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.497 1.406v3.783a.625.625 0 0 0 1.25 0v-3.19Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShippingTruckSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
