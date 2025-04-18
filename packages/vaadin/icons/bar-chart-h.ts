import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBarChartHIcon],svg[vaadin-bar-chart-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M2 8h4v6H2zm5-6h4v12H7zm5 4h4v8h-4z"></svg:path>`,
})
export class VaadinBarChartHIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
