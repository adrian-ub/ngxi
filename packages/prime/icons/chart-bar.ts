import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeChartBarIcon],svg[prime-chart-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 20.25a.76.76 0 0 1-.75-.75v-15a.75.75 0 0 1 1.5 0v15a.76.76 0 0 1-.75.75"></svg:path><svg:path fill="currentColor" d="M19.5 20.25h-15a.75.75 0 0 1 0-1.5h15a.75.75 0 0 1 0 1.5M8 16.75a.76.76 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.76.76 0 0 1-.75.75m3.5 0a.76.76 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v8a.76.76 0 0 1-.75.75m3.5 0a.76.76 0 0 1-.75-.75v-4a.75.75 0 0 1 1.5 0v4a.76.76 0 0 1-.75.75m3.5 0a.76.76 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v8a.76.76 0 0 1-.75.75"></svg:path>`,
})
export class PrimeChartBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
