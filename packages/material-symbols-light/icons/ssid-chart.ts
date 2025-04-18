import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSsidChartIcon],svg[material-symbols-light-ssid-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.039 20.327l-6.181-5.98L4 15.672v-1.22l1.942-1.4l6.145 5.97l4.386-3.523H20v1h-3.173zm.019-8.98L7.683 6.97L4 9.654V8.429l3.767-2.775l4.375 4.375L20 4.346v1.245z"></svg:path>`,
})
export class MaterialSymbolsLightSsidChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
