import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeAlignCenterIcon],svg[prime-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.75H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5m3-4H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0 8H4a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m-3 4H7a.75.75 0 0 1 0-1.5h10a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class PrimeAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
