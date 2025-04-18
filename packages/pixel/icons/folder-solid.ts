import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFolderSolidIcon],svg[pixel-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6v15h-1v1H2v-1H1V3h1V2h9v1h1v1h1v1h9v1z"></svg:path>`,
})
export class PixelFolderSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
