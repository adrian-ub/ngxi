import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFireSolidIcon],svg[pixel-fire-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13v-3h-1V9h-1V6h-1V4h-1V3h-1V2h-1V1h-2v1h1v2h-1v2h-1v1H9v1H8v1H7v1H6v3h1v2H6v-1H5v-2H4v2H3v3h1v2h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-2h1v-5zm-2 7h-1v1h-2v1h-4v-1H9v-4h1v-1h1v-1h1v-1h1v-3h-1v-1h-1V9h1v1h2v2h1v5h-1v2h1v-1h1v-1h1z"></svg:path>`,
})
export class PixelFireSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
