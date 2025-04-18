import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowUpLeftIcon],svg[prime-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.3 15.54a.75.75 0 0 0 1.5 0V8.86l8.62 8.62a.75.75 0 1 0 1.06-1.06L8.86 7.8h6.68a.75.75 0 0 0 0-1.5H7.05a.8.8 0 0 0-.29.06a.76.76 0 0 0-.46.69Z"></svg:path>`,
})
export class PrimeArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
