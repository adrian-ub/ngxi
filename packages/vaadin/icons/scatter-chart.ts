import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinScatterChartIcon],svg[vaadin-scatter-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M5 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class VaadinScatterChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
