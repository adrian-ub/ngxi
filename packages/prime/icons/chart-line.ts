import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeChartLineIcon],svg[prime-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 20.25a.76.76 0 0 1-.75-.75v-15a.75.75 0 0 1 1.5 0v15a.76.76 0 0 1-.75.75"></svg:path><svg:path fill="currentColor" d="M19.5 20.25h-15a.75.75 0 0 1 0-1.5h15a.75.75 0 0 1 0 1.5m-5.5-5.5a.74.74 0 0 1-.53-.22L11 12.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L14 12.94l3.47-3.47a.75.75 0 0 1 1.06 1.06l-4 4a.74.74 0 0 1-.53.22"></svg:path><svg:path fill="currentColor" d="M18.5 13.84a.76.76 0 0 1-.75-.75v-2.84H15a.75.75 0 0 1 0-1.5h3.5a.76.76 0 0 1 .75.75v3.59a.76.76 0 0 1-.75.75"></svg:path>`,
})
export class PrimeChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
