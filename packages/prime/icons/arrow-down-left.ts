import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowDownLeftIcon],svg[prime-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.54 17.7a.75.75 0 0 0 0-1.5H8.86l8.62-8.62a.75.75 0 1 0-1.06-1.06L7.8 15.14V8.46a.75.75 0 0 0-1.5 0V17a.8.8 0 0 0 .06.29a.76.76 0 0 0 .69.46Z"></svg:path>`,
})
export class PrimeArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
