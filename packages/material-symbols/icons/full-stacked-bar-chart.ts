import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFullStackedBarChartIcon],svg[material-symbols-full-stacked-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-3h4v3zm0-4v-4h4v4zm0-5V4h4v7zm6 9v-7h4v7zm0-8V8h4v4zm0-5V4h4v3zm6 13v-2h4v2zm0-3v-4h4v4zm0-5V4h4v8z"></svg:path>`,
})
export class MaterialSymbolsFullStackedBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
