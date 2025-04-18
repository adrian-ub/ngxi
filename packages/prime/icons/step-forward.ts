import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeStepForwardIcon],svg[prime-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19.75a.8.8 0 0 1-.29-.06a.74.74 0 0 1-.46-.69V5a.74.74 0 0 1 .46-.69a.75.75 0 0 1 .82.16l7 7a.75.75 0 0 1 0 1.06l-7 7a.77.77 0 0 1-.53.22m.75-12.94v10.38L13.94 12Z"></svg:path><svg:path fill="currentColor" d="M16 19.75a.76.76 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v14a.76.76 0 0 1-.75.75"></svg:path>`,
})
export class PrimeStepForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
