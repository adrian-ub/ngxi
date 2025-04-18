import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primePercentageIcon],svg[prime-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.05 17.7a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l9.9-9.9a.75.75 0 1 1 1.06 1.06l-9.9 9.9a.74.74 0 0 1-.53.22m1.45-6.95a2.25 2.25 0 1 1 2.25-2.25a2.25 2.25 0 0 1-2.25 2.25m0-3a.75.75 0 1 0 .75.75a.76.76 0 0 0-.75-.75m7 10a2.25 2.25 0 1 1 2.25-2.25a2.25 2.25 0 0 1-2.25 2.25m0-3a.75.75 0 1 0 .75.75a.76.76 0 0 0-.75-.75"></svg:path>`,
})
export class PrimePercentageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
