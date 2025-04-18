import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsBarChartSolidIcon],svg[teenyicons-bar-chart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 0h1v12h-1zm-3 3v9H9V3zM6 6v6H5V6zm-5 6V9h1v3zm14 3H0v-1h15z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsBarChartSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
