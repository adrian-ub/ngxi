import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeChevronCircleRightIcon],svg[prime-chevron-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 1 9-9a9 9 0 0 1-9 9m0-16.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 12 4.5"></svg:path><svg:path fill="currentColor" d="M10 16.75a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06L12.94 12L9.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.74.74 0 0 1-.53.22"></svg:path>`,
})
export class PrimeChevronCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
