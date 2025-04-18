import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinChartTimelineIcon],svg[vaadin-chart-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13v-1H1V0H0v13h5v2H0v1h16v-1h-5v-2z"></svg:path><svg:path fill="currentColor" d="M9 7L6 4L2 8v3h14V0z"></svg:path>`,
})
export class VaadinChartTimelineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
