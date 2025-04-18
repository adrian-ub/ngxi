import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPhoneRingingLowIcon],svg[pixel-phone-ringing-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V5h3v1h1v1h1v1h1v1h1v3h-2v-2h-1V9h-1V8h-1V7z"></svg:path><svg:path fill="currentColor" d="M22 17v-1h-1v-1h-2v-1h-3v1h-1v1h-3v-1h-1v-1h-1v-1H9v-1H8V9h1V8h1V5H9V3H8V2H7V1H4v1H2v1H1v5h1v4h1v2h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v1h4v1h5v-1h1v-2h1v-3zm-1 3h-1v1h-4v-1h-4v-1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-2H4V8H3V4h1V3h3v2h1v3H7v1H6v3h1v1h1v1h1v1h1v1h1v1h1v1h3v-1h1v-1h3v1h2z"></svg:path>`,
})
export class PixelPhoneRingingLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
