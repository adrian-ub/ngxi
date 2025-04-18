import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinChartIcon],svg[vaadin-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 15h16v1H0z"></svg:path><svg:path fill="currentColor" d="M0 0h1v16H0zm9 8L6.1 5L2 9v5h14V.9z"></svg:path>`,
})
export class VaadinChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
