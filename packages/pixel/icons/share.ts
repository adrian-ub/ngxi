import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelShareIcon],svg[pixel-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9V8h1V6h1V4h-1V2h-1V1h-5v1h-1v2h-1v2h-1v1h-1v1h-1v1H9V8H4v1H3v2H2v2h1v2h1v1h5v-1h1v1h1v1h1v1h1v2h1v2h1v1h5v-1h1v-2h1v-2h-1v-2h-1v-1h-5v1h-2v-1h-1v-1h-1v-4h1V9h1V8h2v1zM9 13H8v1H5v-1H4v-2h1v-1h3v1h1zm6 5h1v-1h3v1h1v2h-1v1h-3v-1h-1zm0-14h1V3h3v1h1v2h-1v1h-3V6h-1z"></svg:path>`,
})
export class PixelShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
