import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeTabletIcon],svg[prime-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3.25H6c-.96 0-1.75.79-1.75 1.75v14c0 .96.79 1.75 1.75 1.75h12c.96 0 1.75-.79 1.75-1.75V5c0-.96-.79-1.75-1.75-1.75M18.25 19c0 .14-.11.25-.25.25H6c-.14 0-.25-.11-.25-.25V5c0-.14.11-.25.25-.25h12c.14 0 .25.11.25.25zM13 16c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1"></svg:path>`,
})
export class PrimeTabletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
