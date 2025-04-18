import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelShareSolidIcon],svg[pixel-share-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 4v2h-1v2h-1v1h-5V8h-2v1h-1v1h-1v4h1v1h1v1h2v-1h5v1h1v2h1v2h-1v2h-1v1h-5v-1h-1v-2h-1v-2h-1v-1h-1v-1h-1v-1H9v1H4v-1H3v-2H2v-2h1V9h1V8h5v1h1V8h1V7h1V6h1V4h1V2h1V1h5v1h1v2z"></svg:path>`,
})
export class PixelShareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
