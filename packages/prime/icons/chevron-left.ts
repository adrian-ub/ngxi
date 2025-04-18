import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeChevronLeftIcon],svg[prime-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17.75a.74.74 0 0 1-.53-.22l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 1.06L10.06 12l4.47 4.47a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22"></svg:path>`,
})
export class PrimeChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
