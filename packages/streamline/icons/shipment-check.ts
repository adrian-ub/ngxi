import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShipmentCheckIcon],svg[streamline-shipment-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5v4m-6.5 0h13v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1z"></svg:path><svg:path d="M.5 4.5L2 1.61A2 2 0 0 1 3.74.5h6.52a2 2 0 0 1 1.79 1.11L13.5 4.5M9.498 7l-2.996 4l-2-1.498"></svg:path></svg:g>`,
})
export class StreamlineShipmentCheckIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
