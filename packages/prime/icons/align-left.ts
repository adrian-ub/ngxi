import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeAlignLeftIcon],svg[prime-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.93 11h-10a.75.75 0 1 1 0-1.5h10a.75.75 0 0 1 0 1.5m6.14-4h-16a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m0 8h-16a.75.75 0 0 1 0-1.5h16a.75.75 0 0 1 0 1.5m-6.14 4h-10a.75.75 0 1 1 0-1.5h10a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class PrimeAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
