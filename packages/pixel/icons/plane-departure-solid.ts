import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelPlaneDepartureSolidIcon],svg[pixel-plane-departure-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4v4h-1v1h-2v1h-2v1h-2v1h-2v1h-2v1h-2v1H4v-1H3v-1H2v-1H1v-2h1V9h2v1h1v1h2v-1h1V9H7V8H6V7H5V6H4V5h1V4h1V3h1v1h2v1h2v1h2v1h2V6h2V5h2V4zM1 18h22v2H1z"></svg:path>`,
})
export class PixelPlaneDepartureSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
