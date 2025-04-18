import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeAlignRightIcon],svg[prime-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10.75H10a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5m.07-4h-16a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0 8h-16a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m-.07 4H10a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class PrimeAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
