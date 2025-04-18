import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFlowChartIcon],svg[flat-color-icons-flow-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#CFD8DC" d="M35 36h4V22H26v-9h-4v9H9v14h4V26h9v10h4V26h9z"></svg:path><svg:path fill="#3F51B5" d="M17 6h14v10H17z"></svg:path><svg:path fill="#00BCD4" d="M32 32h10v10H32zM6 32h10v10H6zm13 0h10v10H19z"></svg:path>`,
})
export class FlatColorIconsFlowChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
