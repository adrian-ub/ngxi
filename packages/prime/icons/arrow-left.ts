import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowLeftIcon],svg[prime-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18.75a.74.74 0 0 1-.53-.22l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 1.06L6.06 12l5.47 5.47a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22"></svg:path><svg:path fill="currentColor" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class PrimeArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
