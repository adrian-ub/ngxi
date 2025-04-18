import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLocationPinIcon],svg[pixel-location-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 8v2h-1v1h-1v1h-2v-1h-1v-1H9V8h1V7h1V6h2v1h1v1z"></svg:path><svg:path fill="currentColor" d="M19 6V4h-1V3h-1V2h-2V1H9v1H7v1H6v1H5v2H4v6h1v2h1v1h1v2h1v1h1v2h1v1h1v2h2v-2h1v-1h1v-2h1v-1h1v-2h1v-1h1v-2h1V6zm-2 6v2h-1v1h-1v2h-1v1h-1v2h-2v-2h-1v-1H9v-2H8v-1H7v-2H6V6h1V4h2V3h6v1h2v2h1v6z"></svg:path>`,
})
export class PixelLocationPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
