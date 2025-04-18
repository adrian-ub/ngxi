import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleRightSolidIcon],svg[pixel-arrow-circle-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22h2v-1h1v-1h1v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8zm-1-9H5v-2h10v-1h-1V9h-1V8h-1V7h-1V6h1V5h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h1v-1h1v-1h1v-1h1z"></svg:path>`,
})
export class PixelArrowCircleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
