import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCrownSolidIcon],svg[pixel-crown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 7v2h-1v1h-1v4h-1v3h-1v2h-1v2H6v-2H5v-2H4v-3H3v-4H2V9H1V7h1V6h2v1h1v2H4v1h1v1h1v1h2v-1h1V9h1V7h1V6h-1V4h1V3h2v1h1v2h-1v1h1v2h1v2h1v1h2v-1h1v-1h1V9h-1V7h1V6h2v1z"></svg:path>`,
})
export class PixelCrownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
