import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaCreditCardOutlineIcon],svg[eva-credit-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4Zm16 8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h16Z"></svg:path><svg:path fill="currentColor" d="M7 15h4a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2m8 0h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class EvaCreditCardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
