import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowRightIcon],svg[prime-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L17.94 12l-5.47-5.47a.75.75 0 0 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.74.74 0 0 1-.53.22"></svg:path><svg:path fill="currentColor" d="M19 12.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class PrimeArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
