import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinChartGridIcon],svg[vaadin-chart-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 9v7h16V9zm5 6H1v-1h4zm0-2H1v-1h4zm0-2H1v-1h4zm5 4H6v-1h4zm0-2H6v-1h4zm0-2H6v-1h4zm5 4h-4v-1h4zm0-2h-4v-1h4zm0-2h-4v-1h4zm1-3H0V0h1v7h15z"></svg:path><svg:path fill="currentColor" d="M15 1.57L9.98 4.43L6.02 2.45L2 4.06v1.08l3.98-1.59l4.04 2.02L15 2.72z"></svg:path>`,
})
export class VaadinChartGridIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
