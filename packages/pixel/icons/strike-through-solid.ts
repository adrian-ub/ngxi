import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelStrikeThroughSolidIcon],svg[pixel-strike-through-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16v5h-1v1h-1v1H6v-1H5v-2h9v-1h1v-3zm4-5v2h-1v1H3v-1H2v-2h1v-1h18v1zM6 8V3h1V2h1V1h10v1h1v2h-9v1H9v3z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelStrikeThroughSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
