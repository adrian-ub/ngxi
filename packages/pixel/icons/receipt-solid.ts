import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelReceiptSolidIcon],svg[pixel-receipt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 1v1h-1v1h-1V2h-1V1h-2v1h-1v1h-2V2h-1V1H8v1H7v1H6V2H5V1H4v22h1v-1h1v-1h1v1h1v1h2v-1h1v-1h2v1h1v1h2v-1h1v-1h1v1h1v1h1V1zm-1 8H6V7h12zm0 4H6v-2h12zm0 4H6v-2h12z"></svg:path>`,
})
export class PixelReceiptSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
