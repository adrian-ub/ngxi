import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelCcIcon],svg[pixel-cc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5V4H2v1H1v14h1v1h20v-1h1V5zm-1 13H3V6h18z"></svg:path><svg:path fill="currentColor" d="M20 7v2h-4v1h-1v4h1v1h4v2h-5v-1h-1v-1h-1V9h1V8h1V7zm-9 0v2H7v1H6v4h1v1h4v2H6v-1H5v-1H4V9h1V8h1V7z"></svg:path>`,
})
export class PixelCcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
