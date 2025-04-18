import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelUserCheckSolidIcon],svg[pixel-user-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 9v1h-1v1h-1v1h-1v1h-1v1h-2v-1h-1v-1h-1v-1h1v-1h1v1h2v-1h1V9h1V8h1v1zM13 6v3h-1v2h-2v1H7v-1H5V9H4V6h1V4h2V3h3v1h2v2zm3 10v4h-1v1H2v-1H1v-4h1v-1h1v-1h1v-1h2v1h5v-1h2v1h1v1h1v1z"></svg:path>`,
})
export class PixelUserCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
