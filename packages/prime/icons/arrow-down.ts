import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeArrowDownIcon],svg[prime-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.75a.74.74 0 0 1-.53-.22l-6-6a.75.75 0 0 1 1.06-1.06L12 17.94l5.47-5.47a.75.75 0 0 1 1.06 1.06l-6 6a.74.74 0 0 1-.53.22"></svg:path><svg:path fill="currentColor" d="M12 19.75a.76.76 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v14a.76.76 0 0 1-.75.75"></svg:path>`,
})
export class PrimeArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
