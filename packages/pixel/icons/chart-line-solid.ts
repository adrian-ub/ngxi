import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelChartLineSolidIcon],svg[pixel-chart-line-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13v-2h1v-1h1V9h1V8h1v1h1v1h1v1h1v1h1v-1h1v-1h1V9h1V7h-1V6h-1V5h7v7h-1v-1h-1v-1h-2v1h-1v1h-1v1h-1v1h-1v1h-1v-1h-1v-1h-1v-1h-1v-1H9v1H8v1z"></svg:path><svg:path fill="currentColor" d="M23 17v3H2v-1H1V4h3v13z"></svg:path>`,
})
export class PixelChartLineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
