import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinPieChartIcon],svg[vaadin-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1c3.2.2 5.7 2.8 6 6H9zm-.5-1H8v8h8v-.5C16 3.4 12.6 0 8.5 0"></svg:path><svg:path fill="currentColor" d="M7 9V1c-3.9.3-7 3.5-7 7.5C0 12.6 3.4 16 7.5 16c4 0 7.2-3.1 7.5-7z"></svg:path>`,
})
export class VaadinPieChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
