import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUsersCrownIcon],svg[pixel-users-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12v-1h1V5h4v1h1v5h-1v1zm0-9h-1v1h-1v1h-1V4H9V3H8v1H7v1H6V4H5V3H4v7h1v1h1v1h5v-1h1v-1h1zm-2 6h-1v1H7V9H6V7h5zm12 8v3h-1v1h-6v-1h1v-4h-1v-1h-1v-1h5v1h1v1h1v1z"></svg:path><svg:path fill="currentColor" d="M15 17v-1h-1v-1h-1v-1H4v1H3v1H2v1H1v3h1v1h13v-1h1v-3zM4 17v-1h9v1h1v2H3v-2z"></svg:path>`,
})
export class PixelUsersCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
