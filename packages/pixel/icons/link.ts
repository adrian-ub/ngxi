import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLinkIcon],svg[pixel-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10h1v7h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1H5v-1H4v-1H3v-1H2v-1H1v-5h1v-1h1v-1h1v-1h1v3H4v1H3v3h1v1h1v1h1v1h4v-1h1v-1h1v-1h1v-1h1v-1h1v-5h-1v-1h-1V9h1V8h1v1h1z"></svg:path><svg:path fill="currentColor" d="M23 5v5h-1v1h-1v1h-1v1h-1v-3h1V9h1V6h-1V5h-1V4h-1V3h-4v1h-1v1h-1v1h-1v1h-1v1H9v5h1v1h1v1h-1v1H9v-1H8v-1H7V7h1V6h1V5h1V4h1V3h1V2h1V1h6v1h1v1h1v1h1v1z"></svg:path>`,
})
export class PixelLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
