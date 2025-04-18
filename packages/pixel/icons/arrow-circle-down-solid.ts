import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleDownSolidIcon],svg[pixel-arrow-circle-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16v2h1v1h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v1H2v2H1v8zm9-1V5h2v10h1v-1h1v-1h1v-1h1v-1h1v1h1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-1h1v-1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelArrowCircleDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
