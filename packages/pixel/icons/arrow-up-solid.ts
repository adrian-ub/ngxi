import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelArrowUpSolidIcon],svg[pixel-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1h-1V9h-1V8h-1v15h-4V8H9v1H8v1H7v1H6v1H5v1H4v1H3v-1H2v-1H1v-1h1v-1h1V9h1V8h1V7h1V6h1V5h1V4h1V3h1V2h1z"></svg:path>`,
})
export class PixelArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
