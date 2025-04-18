import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelFlagCheckeredIcon],svg[pixel-flag-checkered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4v1h-2v1h-6V5H6v1H5V5h1V3H5V2H3v1H2v2h1v17h2v-4h1v-1h7v1h6v-1h2v-1h1V4zm-9 11H6v1H5v-3h1v-1h6zm0-5H6v1H5V8h1V7h6zm8 5h-1v1h-5v-3h5v-1h1zm0-5h-1v1h-5V8h5V7h1z"></svg:path>`,
})
export class PixelFlagCheckeredIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
