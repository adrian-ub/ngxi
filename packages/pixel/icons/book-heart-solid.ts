import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBookHeartSolidIcon],svg[pixel-book-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17v-1h1V2h-1V1H4v1H3v1H2v18h1v1h1v1h17v-1h1v-1h-1v-1h-1v-3zm-3 4H6v-1H5v-2h1v-1h12zm0-12h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1H9v-1H8V9H7V6h1V5h3v1h1v1h1V6h1V5h3v1h1z"></svg:path>`,
})
export class PixelBookHeartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
