import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeChevronUpIcon],svg[prime-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15.25a.74.74 0 0 1-.53-.22L12 10.56L7.53 15a.75.75 0 0 1-1.06-1l5-5a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.19"></svg:path>`,
})
export class PrimeChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
