import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelDownloadSolidIcon],svg[pixel-download-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h20v3H2zM20 8v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4V8h1V7h2v1h1v1h1v1h1V1h4v9h1V9h1V8h1V7h2v1z"></svg:path>`,
})
export class PixelDownloadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
