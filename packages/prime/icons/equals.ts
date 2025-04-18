import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeEqualsIcon],svg[prime-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 9A.75.75 0 0 1 5 8.25h14a.75.75 0 0 1 0 1.5H5A.75.75 0 0 1 4.25 9m0 6a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class PrimeEqualsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
