import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartStackedIcon],svg[carbon-chart-stacked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28V6h-8v22h-4V14H8v14H4V2H2v26a2 2 0 0 0 2 2h26v-2ZM22 8h4v10h-4Zm-12 8h4v6h-4Z"></svg:path>`,
})
export class CarbonChartStackedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
