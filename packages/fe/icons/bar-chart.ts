import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feBarChartIcon],svg[fe-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 19h15a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 2 0zm5-4a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0zm2 0V8a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0m4-11a1 1 0 0 1 2 0v11a1 1 0 0 1-2 0z"></svg:path>`,
})
export class FeBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
