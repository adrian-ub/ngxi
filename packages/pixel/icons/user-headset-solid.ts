import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUserHeadsetSolidIcon],svg[pixel-user-headset-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6v6h-1v1h-1v1h-2v1h-6v-3h3v1h4v-1h1v-1h1V7h-1V5h-1V4h-1V3h-1V2H9v1H8v1H7v1H6v2H5v4H4v-1H3V7h1V6h1V4h1V3h1V2h1V1h8v1h1v1h1v1h1v2z"></svg:path><svg:path fill="currentColor" d="M18 8v2h-1v1h-1v1h-2v-1H9v3H8v-1H7v-1H6V8h1V6h1V5h1V4h6v1h1v1h1v2zm4 11v3h-1v1H3v-1H2v-3h1v-1h1v-1h1v-1h4v1h6v-1h4v1h1v1h1v1z"></svg:path>`,
})
export class PixelUserHeadsetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
