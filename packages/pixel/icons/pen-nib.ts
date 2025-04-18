import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPenNibIcon],svg[pixel-pen-nib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4V3h-1V2h-1V1h-3v1h-1v1h-1v1h-1v1h-2v1H9v1H6v1H5v2H4v3H3v3H2v3H1v3h1v1h3v-1h3v-1h3v-1h3v-1h2v-1h1v-3h1v-3h1v-2h1V9h1V8h1V7h1V4zm-6 8v3h-1v2h-1v1h-3v1H8v1H6v-1h1v-1h1v-1h1v-1h3v-3h-1v-1H8v3H7v1H6v1H5v1H4v-2h1v-3h1v-3h1V9h2V8h3V7h3v1h1v1h1v3z"></svg:path>`,
})
export class PixelPenNibIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
