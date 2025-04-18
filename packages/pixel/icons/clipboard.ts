import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelClipboardIcon],svg[pixel-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5V4h-3V3h-1V2h-1V1h-4v1H9v1H8v1H5v1H4v17h1v1h14v-1h1V5zm-9-2h1V2h2v1h1v2h-1v1h-2V5h-1zM6 6h2v1h8V6h2v15H6z"></svg:path>`,
})
export class PixelClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
