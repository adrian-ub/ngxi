import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSaveIcon],svg[pixel-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 14v4h-1v1h-4v-1H9v-4h1v-1h4v1z"></svg:path><svg:path fill="currentColor" d="M22 7V6h-1V5h-1V4h-1V3h-1V2h-1V1H2v1H1v20h1v1h20v-1h1V7zm-7 3V3h1v1h1v1h1v1h1v1h1v1h1v13H3V3h1v7zM6 3h7v5H6z"></svg:path>`,
})
export class PixelSaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
