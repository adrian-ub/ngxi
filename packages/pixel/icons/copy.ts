import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCopyIcon],svg[pixel-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20v2h-1v1H3v-1H2V6h1V5h3v15z"></svg:path><svg:path fill="currentColor" d="M16 7V1H8v1H7v16h1v1h13v-1h1V7zm4 10H9V3h5v6h6z"></svg:path><svg:path fill="currentColor" d="M22 5v1h-5V1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
