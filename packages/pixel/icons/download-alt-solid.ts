import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelDownloadAltSolidIcon],svg[pixel-download-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H5v-1h4V2h1V1h4v1h1v9h4v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6z"></svg:path><svg:path fill="currentColor" d="M22 16v-1h-5v1h-1v1h-1v1h-1v1h-4v-1H9v-1H8v-1H7v-1H2v1H1v6h1v1h20v-1h1v-6zm-2 4h-1v-1h1zm-2-1v1h-1v-1z"></svg:path>`,
})
export class PixelDownloadAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
