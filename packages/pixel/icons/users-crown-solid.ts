import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUsersCrownSolidIcon],svg[pixel-users-crown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20h-1v1H2v-1H1v-3h1v-1h1v-1h1v-1h9v1h1v1h1v1h1zm-3-8v-1h1V5h4v1h1v5h-1v1z"></svg:path><svg:path fill="currentColor" d="M23 17v3h-1v1h-6v-1h1v-4h-1v-1h-1v-1h5v1h1v1h1v1zM12 3v1h-1v1h-1V4H9V3H8v1H7v1H6V4H5V3H4v7h1v1h1v1h5v-1h1v-1h1V3zm-1 6h-1v1H7V9H6V7h5z"></svg:path>`,
})
export class PixelUsersCrownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
