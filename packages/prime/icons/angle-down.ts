import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeAngleDownIcon],svg[prime-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14.5a.74.74 0 0 1-.53-.22L8 10.78a.75.75 0 0 1 1-1.06l3 3l3-3a.75.75 0 0 1 1 1.06l-3.5 3.5a.74.74 0 0 1-.5.22"></svg:path>`,
})
export class PrimeAngleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
