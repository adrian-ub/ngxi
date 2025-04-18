import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeCodeIcon],svg[prime-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.53 6.47a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06 0a.75.75 0 0 0 0-1.06L5.06 12l4.47-4.47a.75.75 0 0 0 0-1.06m11 5l-5-5a.75.75 0 0 0-1.06 1.06L18.94 12l-4.47 4.47a.75.75 0 0 0 0 1.06a.75.75 0 0 0 1.06 0l5-5a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class PrimeCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
