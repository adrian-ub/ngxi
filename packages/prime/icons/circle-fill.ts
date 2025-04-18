import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeCircleFillIcon],svg[prime-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="9" fill="currentColor"></svg:circle>`,
})
export class PrimeCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
