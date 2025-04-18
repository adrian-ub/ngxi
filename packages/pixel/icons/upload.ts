import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUploadIcon],svg[pixel-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10V8h1V7h1V6h1V5h1V4h1V3h1V2h1V1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-2V9h-1V8h-1V7h-1V6h-1V5h-1v12h-2V5h-1v1H9v1H8v1H7v1H6v1zM2 20h20v3H2z"></svg:path>`,
})
export class PixelUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
