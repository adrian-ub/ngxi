import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelMoonSolidIcon],svg[pixel-moon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-1v1h-1v1h-2v1h-2v1h-6v-1H8v-1H6v-1H5v-1H4v-2H3v-2H2V9h1V7h1V5h1V4h1V3h2V2h2V1h5v1h-2v1h-2v1h-1v2H9v2H8v4h1v2h1v2h1v1h2v1h2v1h4v-1h2v-1z"></svg:path>`,
})
export class PixelMoonSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
