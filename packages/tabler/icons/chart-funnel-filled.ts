import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartFunnelFilledIcon],svg[tabler-chart-funnel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.72 16l-1.315 3.948A3 3 0 0 1 13.558 22h-3.116a3 3 0 0 1-2.847-2.052L6.28 16zm2-6l-1.333 4H5.613L4.28 10zm-.106-8a2 2 0 0 1 1.896 2.632L20.387 8H3.613L2.49 4.632a2 2 0 0 1 1.72-2.624L4.387 2z"></svg:path>`,
})
export class TablerChartFunnelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
