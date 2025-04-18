import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeStepBackwardIcon],svg[prime-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 19.75a.77.77 0 0 1-.53-.22l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 .82-.16a.74.74 0 0 1 .46.69v14a.74.74 0 0 1-.46.69a.8.8 0 0 1-.29.06M10.06 12l5.19 5.19V6.81Z"></svg:path><svg:path fill="currentColor" d="M8 19.75a.76.76 0 0 1-.75-.75V5a.75.75 0 0 1 1.5 0v14a.76.76 0 0 1-.75.75"></svg:path>`,
})
export class PrimeStepBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
