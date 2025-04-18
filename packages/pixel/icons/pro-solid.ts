import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelProSolidIcon],svg[pixel-pro-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h2v2h-2zm-6-1h1v2h-1z"></svg:path><svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zm-1 10h-6V9h6zm-7-3h-1v1h1v2h-2v-1h-1v1H9V9h5zM8 9v4H5v2H3V9z"></svg:path><svg:path fill="currentColor" d="M5 10h1v2H5z"></svg:path>`,
})
export class PixelProSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
