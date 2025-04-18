import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelRefreshSolidIcon],svg[pixel-refresh-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 14v1h-1v2h-1v2h-1v1h-1v1h-2v1h-2v1H9v-1H7v-1H5v-1H3v1H2v1H1v-8h8v1H8v1H7v2h1v1h2v1h4v-1h2v-1h1v-1h1v-2h1v-1zm0-12v8h-8V9h1V8h1V6h-1V5h-2V4h-4v1H8v1H7v1H6v2H5v1H1V9h1V7h1V5h1V4h1V3h2V2h2V1h6v1h2v1h2v1h2V3h1V2z"></svg:path>`,
})
export class PixelRefreshSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
