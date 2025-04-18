import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelHeading2SolidIcon],svg[pixel-heading-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4h3v16H9v-7H4v7H1V4h3v6h5zm14 2v5h-1v1h-1v2h-1v1h-1v1h-1v1h5v3h-9v-3h1v-1h1v-2h1v-1h1v-2h1v-1h1V7h-3v3h-3V6h1V5h1V4h5v1h1v1z"></svg:path><svg:path fill="none" d="M0 0h24v24H0z"></svg:path>`,
})
export class PixelHeading2SolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
