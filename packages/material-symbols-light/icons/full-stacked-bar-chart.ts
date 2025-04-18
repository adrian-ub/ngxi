import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFullStackedBarChartIcon],svg[material-symbols-light-full-stacked-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19v-2.808h3V19zm0-3.577v-3h3v3zm0-3.77V5h3v6.654zM10.52 19v-6.654h3V19zm0-7.423v-3h3v3zm0-3.77V5h3v2.808zM16 19v-1.884h3V19zm0-2.654v-3h3v3zm0-3.769V5h3v7.577z"></svg:path>`,
})
export class MaterialSymbolsLightFullStackedBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
