import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelDownloadIcon],svg[pixel-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10H4V8h2v1h1v1h1v1h1v1h1v1h1V1h2v12h1v-1h1v-1h1v-1h1V9h1V8h2v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5zM2 21h20v2H2z"></svg:path>`,
})
export class PixelDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
