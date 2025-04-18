import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDepthChartOutlineIcon],svg[teenyicons-depth-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M.5 0v14.5h14V0M.5 4.5h2v1h2v3h2v3h1v3v-2h2v-2h2v-3h1v-2h2"></svg:path>`,
})
export class TeenyiconsDepthChartOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
