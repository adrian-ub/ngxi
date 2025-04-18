import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFileImportIcon],svg[pixel-file-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15v-2h11V8h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-5z"></svg:path><svg:path fill="currentColor" d="M23 6v16h-1v1H7v-1H6v-6h2v5h13V8h-5V3H8v9H6V2h1V1h11v1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelFileImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
