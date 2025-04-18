import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsForecastieIcon],svg[arcticons-forecastie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.41 11c5.3-.29 10.8 2.76 12.63 9.75c10.38 1.41 9.49 15.3.06 16.27H13.28c-10.95-1.47-12.44-17.4 0-19.54A12 12 0 0 1 23.41 11m0 0"></svg:path>`,
})
export class ArcticonsForecastieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
