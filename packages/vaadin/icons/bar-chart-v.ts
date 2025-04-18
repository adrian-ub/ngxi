import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinBarChartVIcon],svg[vaadin-bar-chart-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 15V0H0v16h16v-1z"></svg:path><svg:path fill="currentColor" d="M8 0v4H2V0zm6 5v4H2V5zm-4 5v4H2v-4z"></svg:path>`,
})
export class VaadinBarChartVIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
