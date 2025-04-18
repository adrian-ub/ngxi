import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePieChartSolidIcon],svg[streamline-pie-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.375.028A7 7 0 1 0 11.64 12.24L6.57 7.454A.63.63 0 0 1 6.376 7V.028Zm6.124 11.304A7 7 0 0 0 7.625.027v6.704z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePieChartSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
