import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiBarChartIcon],svg[oi-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v7h8V6H1V0zm5 0v5h2V0zM2 2v3h2V2z"></svg:path>`,
})
export class OiBarChartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
