import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCreditCardFIcon],svg[jam-credit-card-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H0V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm0 3v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7zM4 9a1 1 0 1 0 0 2h1a1 1 0 0 0 0-2zm5 0a1 1 0 1 0 0 2h5a1 1 0 0 0 0-2z"></svg:path>`,
})
export class JamCreditCardFIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
