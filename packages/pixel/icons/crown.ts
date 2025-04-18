import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCrownIcon],svg[pixel-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 7V6h-2v1h-1v2h1v1h-1v1h-1v1h-2v-1h-1V9h-1V7h-1V6h1V4h-1V3h-2v1h-1v2h1v1h-1v2H9v2H8v1H6v-1H5v-1H4V9h1V7H4V6H2v1H1v2h1v1h1v4h1v3h1v2h1v2h12v-2h1v-2h1v-3h1v-4h1V9h1V7zm-4 7v3h-1v2H7v-2H6v-3H5v-1h1v1h2v-1h1v-1h1v-1h1V9h2v2h1v1h1v1h1v1zv-1h1v1z"></svg:path>`,
})
export class PixelCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
