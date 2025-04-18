import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartAddIcon],svg[pixelarticons-chart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h10v2H5v14h14v-8h2v10H3zm6 8H7v6h2zm2-4h2v10h-2zm6 6h-2v4h2zm0-10h2v2h2v2h-2v2h-2V7h-2V5h2z"></svg:path>`,
})
export class PixelarticonsChartAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
