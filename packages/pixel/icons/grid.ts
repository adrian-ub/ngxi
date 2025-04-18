import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelGridIcon],svg[pixel-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13H2v1H1v8h1v1h8v-1h1v-8h-1zm-1 8H3v-6h6zm1-19V1H2v1H1v8h1v1h8v-1h1V2zM3 9V3h6v6zm19 4h-8v1h-1v8h1v1h8v-1h1v-8h-1zm-1 8h-6v-6h6zm1-19V1h-8v1h-1v8h1v1h8v-1h1V2zm-1 7h-6V3h6z"></svg:path>`,
})
export class PixelGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
