import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFolderIcon],svg[pixel-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V5h-9V4h-1V3h-1V2H2v1H1v18h1v1h20v-1h1V6zm-1 14H3V4h7v1h1v1h1v1h9z"></svg:path>`,
})
export class PixelFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
