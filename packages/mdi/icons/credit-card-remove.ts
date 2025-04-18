import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardRemoveIcon],svg[mdi-credit-card-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09a5.5 5.5 0 0 1-.09-1a6 6 0 0 1 6-6a5.9 5.9 0 0 1 3 .81V6a2 2 0 0 0-2-2m0 7H4V8h16m2.54 8.88L20.41 19l2.13 2.12l-1.42 1.42L19 20.41l-2.12 2.13l-1.42-1.42L17.59 19l-2.13-2.12l1.42-1.42L19 17.59l2.12-2.13Z"></svg:path>`,
})
export class MdiCreditCardRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
