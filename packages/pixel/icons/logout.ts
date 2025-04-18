import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelLogoutIcon],svg[pixel-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4h2v1h1v1h1v1h1v1h1v1h1v1h1v1h1v2h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-2h1v-1h1v-1h1v-1h1v-1h1v-1H7v-2h12v-1h-1V9h-1V8h-1V7h-1V6h-1zM1 2h2v20H1z"></svg:path>`,
})
export class PixelLogoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
