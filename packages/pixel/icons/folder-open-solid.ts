import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFolderOpenSolidIcon],svg[pixel-folder-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16H1V3h1V2h7v1h1v1h9v1h1v4H5v1H4v2H3v2H2z"></svg:path><svg:path fill="currentColor" d="M23 10v2h-1v2h-1v2h-1v2h-1v3h-1v1H3v-1H2v-3h1v-2h1v-2h1v-2h1v-2z"></svg:path>`,
})
export class PixelFolderOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
