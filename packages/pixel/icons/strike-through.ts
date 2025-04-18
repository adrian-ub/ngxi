import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelStrikeThroughIcon],svg[pixel-strike-through-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h20v2H2zm17-9v1H9v1H8v5H6V3h1V2h1V1h10v1zm-1 13v6h-1v1h-1v1H6v-1H5v-1h10v-1h1v-5z"></svg:path>`,
})
export class PixelStrikeThroughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
