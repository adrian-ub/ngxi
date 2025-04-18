import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelChartNetworkSolidIcon],svg[pixel-chart-network-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14v-4h1V9h1V8h2V7h1V5h-1V4h-2v1h-1v2h-1v1h-1v1h-2V8h-4V7H9V6H8V4H7V3H5v1H4v2h1v1h2v1h1v1h1v2H8v1H6v-1H5v-1H2v1H1v3h1v1h3v-1h4v1h1v1h1v1h3v-1h1v1h1v1h1v3h1v1h3v-1h1v-3h-1v-1h-3v-1h-1v-1h-1v-1zm-3 0h-3v-3h3z"></svg:path>`,
})
export class PixelChartNetworkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
