import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFileImportSolidIcon],svg[pixel-file-import-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 13h5v3H1zm22-5v14h-1v1H7v-1H6v-6h6v4h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h-1v-1h-1v-1h-1v-1h-1v-1h-1V9h-1v4H6V2h1V1h9v7z"></svg:path><svg:path fill="currentColor" d="M23 6v1h-6V1h1v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelFileImportSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
