import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleUpSolidIcon],svg[pixel-arrow-circle-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V6h-1V5h-1V4h-1V3h-1V2h-2V1H8v1H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V8zm-9 1v10h-2V9h-1v1H9v1H8v1H7v1H6v-1H5v-1h1v-1h1V9h1V8h1V7h1V6h1V5h2v1h1v1h1v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1h-1v-1h-1V9z"></svg:path>`,
})
export class PixelArrowCircleUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
