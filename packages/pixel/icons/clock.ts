import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelClockIcon],svg[pixel-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9V7h-1V5h-1V4h-1V3h-2V2h-2V1H9v1H7v1H5v1H4v1H3v2H2v2H1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1V9zm-1 6h-1v2h-1v2h-2v1h-2v1H9v-1H7v-1H5v-2H4v-2H3V9h1V7h1V5h2V4h2V3h6v1h2v1h2v2h1v2h1z"></svg:path><svg:path fill="currentColor" d="M16 15v1h-1v1h-1v-1h-1v-1h-1v-1h-1V5h2v8h1v1h1v1z"></svg:path>`,
})
export class PixelClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
