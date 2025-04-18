import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelEnvelopeIcon],svg[pixel-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5V4H3v1H1v14h1v1h20v-1h1V5zm-11 7v-1H9v-1H8V9H7V8H6V7H5V6h14v1h-1v1h-1v1h-1v1h-1v1h-1v1h-1v1h-2v-1zM4 7v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h2v-1h1v-1h1v-1h1v-1h1v-1h1V9h1V8h1V7h1v11H3V7z"></svg:path>`,
})
export class PixelEnvelopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
