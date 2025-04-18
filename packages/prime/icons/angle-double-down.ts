import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeAngleDoubleDownIcon],svg[prime-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.25a.74.74 0 0 1-.53-.22L8 13.53a.75.75 0 0 1 1-1.06l3 3l3-3a.75.75 0 0 1 1 1.06L12.53 17a.74.74 0 0 1-.53.25m0-5.5a.74.74 0 0 1-.53-.22L8 8a.75.75 0 0 1 1-1l3 3l3-3a.75.75 0 0 1 1 1l-3.5 3.5a.74.74 0 0 1-.5.25"></svg:path>`,
})
export class PrimeAngleDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
