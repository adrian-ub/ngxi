import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCloudUploadSolidIcon],svg[pixel-cloud-upload-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v-1h-2V9h-1V8h-1V7h-3v1h-1V6h-1V5H8v1H7v1H6v1H5v3H2v1H1v5h1v1h1v1h2v1h14v-1h2v-1h1v-1h1v-5zM9 14H6v-1h1v-1h1v-1h1v-1h1V9h1v1h1v1h1v1h1v1h1v1h-3v4H9z"></svg:path>`,
})
export class PixelCloudUploadSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
