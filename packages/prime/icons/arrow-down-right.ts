import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowDownRightIcon],svg[prime-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.7 8.46a.75.75 0 1 0-1.5 0v6.68L7.58 6.52a.75.75 0 0 0-1.06 1.06l8.62 8.62H8.46a.75.75 0 0 0 0 1.5H17a.8.8 0 0 0 .29-.06a.76.76 0 0 0 .41-.64Z"></svg:path>`,
})
export class PrimeArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
