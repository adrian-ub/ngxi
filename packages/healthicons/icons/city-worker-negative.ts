import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCityWorkerNegativeIcon],svg[healthicons-city-worker-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsCityWorkerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm29.96 29.262A.48.48 0 0 1 30.5 29c.359.087.744.178 1.147.272c2.263.53 5.059 1.184 6.545 2.16C39.955 32.589 41 33.953 41 35.5V42H7v-6.5c0-1.547 1.045-2.91 2.808-4.068c1.486-.976 4.282-1.63 6.544-2.16c.404-.094.79-.184 1.148-.272a.48.48 0 0 1 .54.262L22 39.696V37l.575-4.021a1 1 0 0 1-.764-.736l-.5-2A1 1 0 0 1 22.28 29h3.438a1 1 0 0 1 .97 1.242l-.5 2a1 1 0 0 1-.764.737L26 37v3.572zM32 16a8 8 0 1 1-16 0a8 8 0 0 1 16 0m2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCityWorkerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCityWorkerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
