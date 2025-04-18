import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinLineChartIcon],svg[vaadin-line-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M9 8L6 5L2 9v2l4-4l3 3l7-7V1z"></svg:path>`,
})
export class VaadinLineChartIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
