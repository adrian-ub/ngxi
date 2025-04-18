import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsPieChartAltSolidIcon],svg[teenyicons-pie-chart-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 0H6v9h9v-.5A8.5 8.5 0 0 0 6.5 0"></svg:path><svg:path fill="currentColor" d="M12.826 10H5V2.174A6.5 6.5 0 1 0 12.826 10"></svg:path>`,
})
export class TeenyiconsPieChartAltSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
