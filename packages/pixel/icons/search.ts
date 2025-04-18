import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSearchIcon],svg[pixel-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20v-1h-1v-1h-1v-1h-1v-1h-2v-1h1v-2h1V7h-1V5h-1V4h-1V3h-1V2h-2V1H7v1H5v1H4v1H3v1H2v2H1v6h1v2h1v1h1v1h1v1h2v1h6v-1h2v-1h1v2h1v1h1v1h1v1h1v1h2v-1h1v-2zm-10-5v1H8v-1H6v-1H5v-2H4V8h1V6h1V5h2V4h4v1h2v1h1v2h1v4h-1v2h-1v1z"></svg:path>`,
})
export class PixelSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
