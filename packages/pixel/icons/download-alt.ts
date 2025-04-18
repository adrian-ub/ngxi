import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelDownloadAltIcon],svg[pixel-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16v-1h-6v-1h1v-1h1v-1h1v-1h-4V2h-1V1h-4v1H9v9H5v1h1v1h1v1h1v1H2v1H1v6h1v1h20v-1h1v-6zm-1 5H3v-4h7v1h1v1h2v-1h1v-1h7zM9 12h2V3h2v9h2v1h-1v1h-1v1h-2v-1h-1v-1H9z"></svg:path><svg:path fill="currentColor" d="M19 19h1v1h-1zm-2 0h1v1h-1z"></svg:path>`,
})
export class PixelDownloadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
