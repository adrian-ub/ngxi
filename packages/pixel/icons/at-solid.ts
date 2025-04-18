import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelAtSolidIcon],svg[pixel-at-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V8h-1V6h-1V4h-1V3h-2V2h-3V1h-4v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h3v1h4v-1h3v-3h-3v1h-4v-1H7v-1H6v-2H5v-2H4v-4h1V8h1V6h1V5h3V4h4v1h3v1h1v2h1v2h1v4h-2v-4h-1V8h-1V7h-2V6h-4v1H8v1H7v2H6v4h1v2h1v1h2v1h4v-1h2v-1h1v1h4v-1h1v-2h1v-4zm-7 4h-1v1h-4v-1H9v-4h1V9h4v1h1z"></svg:path>`,
})
export class PixelAtSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
