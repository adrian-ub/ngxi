import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowUpRightIcon],svg[prime-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.46 6.3a.75.75 0 1 0 0 1.5h6.68l-8.62 8.62a.75.75 0 1 0 1.06 1.06l8.62-8.62v6.68a.75.75 0 0 0 1.5 0V7.05a.8.8 0 0 0-.06-.29a.76.76 0 0 0-.64-.46Z"></svg:path>`,
})
export class PrimeArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
