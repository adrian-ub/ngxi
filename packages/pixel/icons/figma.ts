import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFigmaIcon],svg[pixel-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3.5v-1h-1v-1H7v1H6v1H5v3h1v1h1v2H6v1H5v3h1v1h1v2H6v1H5v3h1v1h1v1h5v-1h1v-6h4v-1h1v-1h1v-3h-1v-1h-1v-2h1v-1h1v-3zm-7 18H8v-1H7v-3h1v-1h3zm0-7H8v-1H7v-3h1v-1h3zm0-7H8v-1H7v-3h1v-1h3zm6 3v3h-1v1h-2v-1h-1v-3h1v-1h2v1zm-1-4v1h-3v-5h3v1h1v3z"></svg:path>`,
})
export class PixelFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
