import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLogoutSolidIcon],svg[pixel-logout-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 5V4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-2h1v-1h1v-1h1v-1H7v-4h9V9h-1V8h-1V7h-1V5zM1 2h3v20H1z"></svg:path>`,
})
export class PixelLogoutSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
