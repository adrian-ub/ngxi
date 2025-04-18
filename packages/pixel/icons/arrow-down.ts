import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelArrowDownIcon],svg[pixel-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-1H2v-1H1v-1h1v-1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1V1h2v18h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v-1h1v1z"></svg:path>`,
})
export class PixelArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
