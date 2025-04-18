import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChartGraphIcon],svg[icon-park-solid-chart-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M17 6h14v9H17zM6 33h14v9H6zm22 0h14v9H28z"></svg:path><svg:path stroke-linecap="round" d="M24 16v8m-11 9v-9h22v9"></svg:path></svg:g>`,
})
export class IconParkSolidChartGraphIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
