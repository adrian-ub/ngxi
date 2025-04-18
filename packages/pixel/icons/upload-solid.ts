import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUploadSolidIcon],svg[pixel-upload-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10H4V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-2v-1h-1V9h-1V8h-1v9h-4V8H9v1H8v1H7v1H5zM2 20h20v3H2z"></svg:path>`,
})
export class PixelUploadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
