import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarTwoSolidIcon],svg[mynaui-chart-bar-two-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.25A2.75 2.75 0 0 0 8.25 5v7.536H5a2.75 2.75 0 0 0-2.75 2.75V19A2.75 2.75 0 0 0 5 21.75h14A2.75 2.75 0 0 0 21.75 19v-7.571A2.75 2.75 0 0 0 19 8.679h-3.25V5A2.75 2.75 0 0 0 13 2.25z"></svg:path>`,
})
export class MynauiChartBarTwoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
