import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeAngleDoubleLeftIcon],svg[prime-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16.25a.74.74 0 0 1-.53-.22L7 12.53a.75.75 0 0 1 0-1.06L10.47 8a.75.75 0 0 1 1.06 1l-3 3l3 3a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.19m5.5 0A.74.74 0 0 1 16 16l-3.5-3.5a.75.75 0 0 1 0-1.06L16 8a.75.75 0 0 1 1 1l-3 3l3 3a.75.75 0 0 1 0 1a.74.74 0 0 1-.5.25"></svg:path>`,
})
export class PrimeAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
