import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeAngleUpIcon],svg[prime-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 14.5a.74.74 0 0 1-.53-.22l-3-3l-3 3A.75.75 0 0 1 8 13.22l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.56.22"></svg:path>`,
})
export class PrimeAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
