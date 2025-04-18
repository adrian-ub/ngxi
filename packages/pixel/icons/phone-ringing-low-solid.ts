import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPhoneRingingLowSolidIcon],svg[pixel-phone-ringing-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7V5h3v1h1v1h1v1h1v1h1v3h-2v-2h-1V9h-1V8h-1V7z"></svg:path><svg:path fill="currentColor" d="M23 17v3h-1v2h-1v1h-5v-1h-4v-1h-2v-1H9v-1H8v-1H7v-1H6v-1H5v-1H4v-1H3v-2H2V8H1V3h1V2h2V1h3v1h1v1h1v2h1v3H9v1H8v3h1v1h1v1h1v1h1v1h3v-1h1v-1h3v1h2v1h1v1z"></svg:path>`,
})
export class PixelPhoneRingingLowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
