import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsDownloadIcon],svg[pixelarticons-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17V3h-2v10H9v-2H7v2h2v2h2v2zm8 2v-4h-2v4H5v-4H3v6h18zm-8-6v2h2v-2h2v-2h-2v2z"></svg:path>`,
})
export class PixelarticonsDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
