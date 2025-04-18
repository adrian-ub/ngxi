import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBoxUsdSolidIcon],svg[pixel-box-usd-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 9v13h1v1h20v-1h1V9zm12 11v2h-2v-2H9v-2h4v-1h-3v-1H9v-4h2v-2h2v2h2v2h-4v1h3v1h1v4zM11 1v6H1V6h1V4h1V3h1V2h1V1zm12 5v1H13V1h6v1h1v1h1v1h1v2z"></svg:path>`,
})
export class PixelBoxUsdSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
