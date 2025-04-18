import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelChartNetworkIcon],svg[pixel-chart-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7H5V6H4V4h1V3h2v1h1v2H7zm-2 4h1v3H5v1H2v-1H1v-3h1v-1h3zm4-3h1v1H9zm6 7h1v1h-1zm2-7h1v1h-1zM8 7h1v1H8zm-1 5h1v1H7z"></svg:path><svg:path fill="currentColor" d="M16 14v-3h-1v-1h-1V9h-3v1h-1v1H9v3h1v1h1v1h3v-1h1v-1zm-5 0v-3h3v3zm5-5h1v1h-1zm0 7h1v1h-1zm5 2h1v3h-1v1h-3v-1h-1v-3h1v-1h3zm1-13v2h-1v1h-2V7h-1V5h1V4h2v1z"></svg:path>`,
})
export class PixelChartNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
