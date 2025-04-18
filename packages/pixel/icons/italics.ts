import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelItalicsIcon],svg[pixel-italics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 1v2h-5v1h-1v2h-1v2h-1v3h-1v2h-1v3h-1v2h-1v2H9v1h7v2H2v-2h5v-1h1v-2h1v-2h1v-3h1v-2h1V8h1V6h1V4h1V3H8V1z"></svg:path>`,
})
export class PixelItalicsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
