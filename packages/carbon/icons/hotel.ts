import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHotelIcon],svg[carbon-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 15A1.5 1.5 0 1 1 8 16.5A1.5 1.5 0 0 1 9.5 15m0-2a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 9.5 13"></svg:path><svg:path fill="currentColor" d="M25 14h-8a2 2 0 0 0-2 2v6H4V10.6l12-6.46l12.53 6.74l.94-1.76l-13-7a1 1 0 0 0-.94 0l-13 7A1 1 0 0 0 2 10v20h2v-6h24v6h2V19a5 5 0 0 0-5-5m-8 8v-6h8a3 3 0 0 1 3 3v3Z"></svg:path>`,
})
export class CarbonHotelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
