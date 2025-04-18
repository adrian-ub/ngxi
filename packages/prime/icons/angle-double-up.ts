import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeAngleDoubleUpIcon],svg[prime-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 11.75a.74.74 0 0 1-.53-.22l-3-3l-3 3A.75.75 0 0 1 8 10.47L11.47 7a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.19m0 5.5A.74.74 0 0 1 15 17l-3-3l-3 3a.75.75 0 0 1-1-1l3.5-3.5a.75.75 0 0 1 1.06 0L16 16a.75.75 0 0 1 0 1a.74.74 0 0 1-.5.25"></svg:path>`,
})
export class PrimeAngleDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
