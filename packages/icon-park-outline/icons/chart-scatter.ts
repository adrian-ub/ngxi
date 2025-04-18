import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChartScatterIcon],svg[icon-park-outline-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 6v36h36"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20 24a4 4 0 1 0 0-8a4 4 0 0 0 0 8m17-8a5 5 0 1 0 0-10a5 5 0 0 0 0 10M15 36a3 3 0 1 0 0-6a3 3 0 0 0 0 6m18-4a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineChartScatterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
