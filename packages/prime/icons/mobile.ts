import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeMobileIcon],svg[prime-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.25H8c-.96 0-1.75.79-1.75 1.75v14c0 .96.79 1.75 1.75 1.75h8c.96 0 1.75-.79 1.75-1.75V5c0-.96-.79-1.75-1.75-1.75M16.25 19c0 .14-.11.25-.25.25H8c-.14 0-.25-.11-.25-.25V5c0-.14.11-.25.25-.25h8c.14 0 .25.11.25.25zM13 16c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1"></svg:path>`,
})
export class PrimeMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
