import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsStackedBarChartIcon],svg[material-symbols-stacked-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V9h4v11zM4 8V4h4v4zm6 12v-8h4v8zm0-9V7h4v4zm6 9v-5h4v5zm0-6v-4h4v4z"></svg:path>`,
})
export class MaterialSymbolsStackedBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
