import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelThumbsdownIcon],svg[pixel-thumbsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2v13H2v-1H1V3h1V2zm16 10V9h-1V6h-1V3h-1V2h-7v1h-2v1H9v1H8v9h1v1h1v1h1v2h1v3h1v1h2v-1h1v-4h-1v-2h7v-1h1v-2zm-2 1h-6v1h-1v1h-1v-1h-1v-1h-1V6h1V5h2V4h5v2h1v3h1z"></svg:path>`,
})
export class PixelThumbsdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
