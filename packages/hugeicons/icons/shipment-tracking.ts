import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShipmentTrackingIcon],svg[hugeicons-shipment-tracking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22H6c-1.886 0-2.828 0-3.414-.586S2 19.886 2 18v-2c0-1.886 0-2.828.586-3.414S4.114 12 6 12h2c1.886 0 2.828 0 3.414.586S12 14.114 12 16v2c0 1.886 0 2.828-.586 3.414S9.886 22 8 22m-2-7h2M18 2c-2.21 0-4 1.809-4 4.04c0 1.276.5 2.268 1.5 3.154c.705.625 1.559 1.663 2.071 2.503c.246.404.594.404.858 0c.538-.824 1.366-1.878 2.071-2.502c1-.887 1.5-1.879 1.5-3.155C22 3.81 20.21 2 18 2m0 13v3c0 1.886 0 2.828-.469 3.414c-.447.56-1.155.585-2.531.586m3.008-16h-.01" color="currentColor"></svg:path>`,
})
export class HugeiconsShipmentTrackingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
