import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeInfoCircleIcon],svg[prime-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.75a.76.76 0 0 1-.75-.75v-5a.75.75 0 0 1 1.5 0v5a.76.76 0 0 1-.75.75m0-7.5a.76.76 0 0 1-.75-.75V8a.75.75 0 0 1 1.5 0v.5a.76.76 0 0 1-.75.75"></svg:path><svg:path fill="currentColor" d="M12 21a9 9 0 1 1 9-9a9 9 0 0 1-9 9m0-16.5a7.5 7.5 0 1 0 7.5 7.5A7.5 7.5 0 0 0 12 4.5"></svg:path>`,
})
export class PrimeInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
