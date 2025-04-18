import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiChartBarSolidIcon],svg[mynaui-chart-bar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 1.75c-.69 0-1.25.56-1.25 1.25v18a1.25 1.25 0 1 0 2.5 0V3c0-.69-.56-1.25-1.25-1.25m-5 6c-.69 0-1.25.56-1.25 1.25v12a1.25 1.25 0 1 0 2.5 0V9c0-.69-.56-1.25-1.25-1.25m-5 7c-.69 0-1.25.56-1.25 1.25v5a1.25 1.25 0 1 0 2.5 0v-5c0-.69-.56-1.25-1.25-1.25"></svg:path>`,
})
export class MynauiChartBarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
