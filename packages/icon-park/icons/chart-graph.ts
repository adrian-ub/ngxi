import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChartGraphIcon],svg[icon-park-chart-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="9" x="17" y="6" fill="#2F88FF"></svg:rect><svg:rect width="14" height="9" x="6" y="33" fill="#2F88FF"></svg:rect><svg:rect width="14" height="9" x="28" y="33" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 16V24"></svg:path><svg:path stroke-linecap="round" d="M13 33V24H35V33"></svg:path></svg:g>`,
})
export class IconParkChartGraphIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
