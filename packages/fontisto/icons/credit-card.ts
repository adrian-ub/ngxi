import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCreditCardIcon],svg[fontisto-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 21.5V12h36v9.5a2.507 2.507 0 0 1-2.5 2.5H2.466a2.4 2.4 0 0 1-1.731-.734l-.001-.001a2.4 2.4 0 0 1-.735-1.731v-.036zM10 18v2h6v-2zm-6 0v2h4v-2zM33.5 0A2.507 2.507 0 0 1 36 2.5V6H0V2.466A2.4 2.4 0 0 1 .734.735L.735.734a2.4 2.4 0 0 1 1.731-.735h.036H2.5z"></svg:path>`,
})
export class FontistoCreditCardIcon {
  readonly viewBox = input("0 0 36 24")
  readonly width = input("1.5em")
  readonly height = input("1em")
}
