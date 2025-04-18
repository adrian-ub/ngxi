import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeMinusIcon],svg[prime-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2"></svg:path>`,
})
export class PrimeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
