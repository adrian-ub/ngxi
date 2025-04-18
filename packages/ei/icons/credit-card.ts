import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiCreditCardIcon],svg[ei-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3M11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1z"></svg:path><svg:path fill="currentColor" d="M9 16h32v6H9zm3 10h1v2h-1zm2 0h1v2h-1zm2 0h1v2h-1zm3 0h1v2h-1zm2 0h1v2h-1zm2 0h1v2h-1zm3 0h1v2h-1zm2 0h1v2h-1zm2 0h1v2h-1zm3 0h1v2h-1zm2 0h1v2h-1zm2 0h1v2h-1z"></svg:path>`,
})
export class EiCreditCardIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
