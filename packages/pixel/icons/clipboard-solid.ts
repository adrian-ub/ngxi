import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelClipboardSolidIcon],svg[pixel-clipboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3V2h-1V1h-4v1H9v1H8v3h1v1h6V6h1V3zm-4 3V5h-1V3h1V2h2v1h1v2h-1v1z"></svg:path><svg:path fill="currentColor" d="M20 5v17h-1v1H5v-1H4V5h1V4h2v3h1v1h8V7h1V4h2v1z"></svg:path>`,
})
export class PixelClipboardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
