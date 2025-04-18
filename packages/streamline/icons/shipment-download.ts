import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentDownloadIcon],svg[streamline-shipment-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v4m-6.5 0h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"></svg:path><svg:path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5M7 6.705v4.612m1.75-1.721L7 11.346l-1.75-1.75"></svg:path></svg:g>`,
})
export class StreamlineShipmentDownloadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
