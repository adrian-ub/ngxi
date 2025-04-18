import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelArrowCircleLeftSolidIcon],svg[pixel-arrow-circle-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H6v1H5v1H4v1H3v1H2v2H1v8h1v2h1v1h1v1h1v1h1v1h2v1h8v-1h2v-1h1v-1h1v-1h1v-1h1v-2h1V8h-1V6h-1V5h-1V4h-1V3h-1V2h-2V1H8zm1 9h10v2H9v1h1v1h1v1h1v1h1v1h-1v1h-1v-1h-1v-1H9v-1H8v-1H7v-1H6v-1H5v-2h1v-1h1V9h1V8h1V7h1V6h1V5h1v1h1v1h-1v1h-1v1h-1v1H9z"></svg:path>`,
})
export class PixelArrowCircleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
