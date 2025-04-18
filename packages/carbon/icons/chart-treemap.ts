import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartTreemapIcon],svg[carbon-chart-treemap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 12h-5V4h5ZM16 4h5v10h-5Zm-2 0v16H4V4ZM4 22h10v6H4Zm12 6V16h12v12Z"></svg:path>`,
})
export class CarbonChartTreemapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
