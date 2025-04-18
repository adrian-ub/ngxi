import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCreditCardIcon],svg[jam-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4V2H2v2zm0 3H2v5h16zM2 0h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m2 9h1a1 1 0 1 1 0 2H4a1 1 0 0 1 0-2m5 0h5a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2"></svg:path>`,
})
export class JamCreditCardIcon {
  readonly viewBox = input("-2 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
