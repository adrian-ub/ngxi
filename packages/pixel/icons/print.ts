import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPrintIcon],svg[pixel-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12h2v1h-2zm2-9v5h-2V4h-1V3H6v5H4V1h14v1h1v1z"></svg:path><svg:path fill="currentColor" d="M1 9v8h3v6h16v-6h3V9zm17 12H6v-5h12zm3-6h-2v-1H5v1H3v-4h18z"></svg:path>`,
})
export class PixelPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
