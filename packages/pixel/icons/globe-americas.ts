import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelGlobeAmericasIcon],svg[pixel-globe-americas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zM9 21v-1H7v-1H5v-2H4v-2H3v-4h1v1h1v1h1v1h2v3h1v1h1v3zm6-2h-1v2h-2v-3h-1v-1h-1v-3H9v-1H8v-1H7v-1H6v-1H5V9H4V7h1V6h1V5h1V4h3V3h2v1h1v4h-2v3h-1v-1H8v2h3v1h4v1h1v3h-1zm5-2h-1v2h-2v1h-1v-1h1v-2h1v-3h-1v-1h-1v-1h-1v-1h-2V9h1V8h1V4h-1V3h1v1h2v1h2v2h-1v1h-1v1h-1v3h1v1h1v1h1v1h1zm1-4h-2v-1h-1V9h1V8h1v1h1z"></svg:path>`,
})
export class PixelGlobeAmericasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
