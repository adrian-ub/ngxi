import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinChartLineIcon],svg[vaadin-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 16h16V0h-1v2.6L11 6V0h-1v6.4l-4-.9V0H5v5.7L1 8.6V0H0zm5-2H1v-1.7l4-2.9zm5 0H6V8.7l.1-.1l3.9.9zm5 0h-4V9.7h.1L15 6.5z"></svg:path>`,
})
export class VaadinChartLineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
