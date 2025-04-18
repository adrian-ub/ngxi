import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAreaChartIcon],svg[material-symbols-light-area-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 16.48l-8.208-6.407l-3.975 5.494L4 12.557V9l3.23 2.423l4.962-6.98L16.654 8H20zM4 19v-5.212L8 17l4-5.5l8 6.237V19z"></svg:path>`,
})
export class MaterialSymbolsLightAreaChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
