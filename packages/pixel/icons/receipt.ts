import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelReceiptIcon],svg[pixel-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15h10v2H7zm0-4h10v2H7zm0-4h10v2H7z"></svg:path><svg:path fill="currentColor" d="M19 1v1h-1v1h-1V2h-1V1h-2v1h-1v1h-2V2h-1V1H8v1H7v1H6V2H5V1H4v22h1v-1h1v-1h1v1h1v1h2v-1h1v-1h2v1h1v1h2v-1h1v-1h1v1h1v1h1V1zm-3 19v1h-2v-1h-1v-1h-2v1h-1v1H8v-1H7v-1H6V5h1V4h1V3h2v1h1v1h2V4h1V3h2v1h1v1h1v14h-1v1z"></svg:path>`,
})
export class PixelReceiptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
