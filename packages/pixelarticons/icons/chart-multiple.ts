import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsChartMultipleIcon],svg[pixelarticons-chart-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2H1v16h18V2zm0 2h14v12H3zm18 2v14H5v2h18V6zM7 8H5v6h2zm2-2h2v8H9zm6 4h-2v4h2z"></svg:path>`,
})
export class PixelarticonsChartMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
