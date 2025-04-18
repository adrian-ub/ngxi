import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartMultitypeIcon],svg[carbon-chart-multitype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h2v8h-2zm-4-4h2v12h-2zm-4 8h2v4h-2zM9 16a7 7 0 1 0 7 7a7.01 7.01 0 0 0-7-7m4.899 6H10v-3.899A5.01 5.01 0 0 1 13.899 22M9 28a5 5 0 0 1-1-9.899V22a2 2 0 0 0 2 2h3.899A5.01 5.01 0 0 1 9 28m13.535-16l4-6H30V4h-4.535l-4 6H18V2h-2v12a2 2 0 0 0 2 2h12v-2H18v-2z"></svg:path><svg:circle cx="11" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="5" r="1" fill="currentColor"></svg:circle><svg:circle cx="5" cy="9" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="13" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonChartMultitypeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
