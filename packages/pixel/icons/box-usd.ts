import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBoxUsdIcon],svg[pixel-box-usd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6V4h-1V3h-1V2h-1V1H5v1H4v1H3v1H2v2H1v16h1v1h20v-1h1V6zm-9-3h5v1h1v1h1v2h-7zM4 5h1V4h1V3h5v4H4zM3 21V9h8v2H9v4h1v1h3v1H9v2h2v2zm18 0h-8v-2h2v-4h-1v-1h-3v-1h4v-2h-2V9h8z"></svg:path>`,
})
export class PixelBoxUsdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
