import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeInfoIcon],svg[prime-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.75a.76.76 0 0 1-.75-.75v-7a.75.75 0 0 1 1.5 0v7a.76.76 0 0 1-.75.75m0-9.5a.76.76 0 0 1-.75-.75V7a.75.75 0 0 1 1.5 0v.5a.76.76 0 0 1-.75.75"></svg:path>`,
})
export class PrimeInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
