import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPlaneIcon],svg[pixel-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11v-1h-7V9h-1V7h-1V6h-1V4h-1V3h-1V2H7v3h1v3h1v2H5V9H4V8H3V7H1v3h1v4H1v3h2v-1h1v-1h1v-1h4v2H8v3H7v3h3v-1h1v-1h1v-2h1v-1h1v-2h1v-1h7v-1h1v-2zm-8 2v1h-1v2h-1v1h-1v2h-1v1H9v1H8v-1h1v-3h1v-4H4v1H3v-4h1v1h6V7H9V4H8V3h1v1h1v1h1v2h1v1h1v2h1v1h7v2z"></svg:path>`,
})
export class PixelPlaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
