import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeChartScatterIcon],svg[prime-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 3.75a.75.75 0 0 1 .75.75v14.25H19.5a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75M8 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1.5 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3.5-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M18 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class PrimeChartScatterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
