import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinCreditCardIcon],svg[vaadin-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2v12h16V2zm15 11H1V8h14zm0-8H1V3h14z"></svg:path><svg:path fill="currentColor" d="M10 11h3v1h-3zm-8 0h6v1H2z"></svg:path>`,
})
export class VaadinCreditCardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
