import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFlagSolidIcon],svg[pixel-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v12h-1v1h-2v1h-6v-1H6v1H5v4H3V5H2V3h1V2h2v1h1v2H5v1h1V5h7v1h6V5h2V4z"></svg:path>`,
})
export class PixelFlagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
