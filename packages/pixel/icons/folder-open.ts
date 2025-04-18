import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFolderOpenIcon],svg[pixel-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10v2H5v2H4v2H3v2H2v3h1v1h15v-1h1v-3h1v-2h1v-2h1v-2h1v-2zm14 4h-1v2h-1v2h-1v2H4v-2h1v-2h1v-2h1v-2h13z"></svg:path><svg:path fill="currentColor" d="M20 5v4h-2V6H9V5H8V4H3v10H2v2H1V3h1V2h7v1h1v1h9v1z"></svg:path>`,
})
export class PixelFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
