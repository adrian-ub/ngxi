import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareChartColumnIcon],svg[gravity-ui-square-chart-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7A1.5 1.5 0 0 1 4.5 3m-3 1.5a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3zm8.499 6.251a.75.75 0 0 0 1.5 0V8.749a.75.75 0 0 0-1.5 0zm-1.998.75a.75.75 0 0 1-.75-.75V5.249a.75.75 0 1 1 1.5 0v5.502a.75.75 0 0 1-.75.75m-3.498-.75a.75.75 0 0 0 1.5 0V7.249a.75.75 0 1 0-1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareChartColumnIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
