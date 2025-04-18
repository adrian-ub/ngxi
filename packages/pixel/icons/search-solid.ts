import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelSearchSolidIcon],svg[pixel-search-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17h-1v1h-2v1H7v-1H5v-1H4v-1H3v-1H2v-2H1V7h1V5h1V4h1V3h1V2h2V1h6v1h2v1h1v1h1v1h1v2h1v6h-1v2h-1v1h-1zm7 3v2h-1v1h-2v-1h-1v-1h-1v-1h-1v-1h-1v-1h1v-1h1v-1h1v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelSearchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
