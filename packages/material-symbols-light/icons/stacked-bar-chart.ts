import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStackedBarChartIcon],svg[material-symbols-light-stacked-bar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19V8.77h3V19zM5 8V5h3v3zm5.52 11l-.02-7.461h3V19zm-.02-8.23v-3h3v3zM16 19v-4.673h3V19zm0-5.442v-3h3v3z"></svg:path>`,
})
export class MaterialSymbolsLightStackedBarChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
