import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelBrightnessLowSolidIcon],svg[pixel-brightness-low-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18h1v2H6v1H4v-1H3v-2h1v-1h2zM4 6H3V4h1V3h2v1h1v2H6v1H4zm-2 8v-1H1v-2h1v-1h2v1h1v2H4v1zm11 6h1v2h-1v1h-2v-1h-1v-2h1v-1h2zM11 4h-1V2h1V1h2v1h1v2h-1v1h-2zm7 2h-1V4h1V3h2v1h1v2h-1v1h-2zm-1 8h-1v2h-2v1h-4v-1H8v-2H7v-4h1V8h2V7h4v1h2v2h1zm3 4h1v2h-1v1h-2v-1h-1v-2h1v-1h2zm3-7v2h-1v1h-2v-1h-1v-2h1v-1h2v1z"></svg:path>`,
})
export class PixelBrightnessLowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
