import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCloudDownloadSolidIcon],svg[pixel-cloud-download-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v-1h-2V9h-1V8h-1V7h-3v1h-1V6h-1V5H8v1H7v1H6v1H5v3H2v1H1v5h1v1h1v1h2v1h14v-1h2v-1h1v-1h1v-5zM9 17v-1H8v-1H7v-1H6v-1h3V9h3v4h3v1h-1v1h-1v1h-1v1h-1v1h-1v-1z"></svg:path>`,
})
export class PixelCloudDownloadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
