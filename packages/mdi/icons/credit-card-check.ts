import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardCheckIcon],svg[mdi-credit-card-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.09c-.06-.33-.09-.66-.09-1c0-3.31 2.69-6 6-6c1.06 0 2.09.28 3 .81V6c0-1.11-.89-2-2-2m0 7H4V8h16m-2.25 14L15 19l1.16-1.16l1.59 1.59l3.59-3.59l1.16 1.41z"></svg:path>`,
})
export class MdiCreditCardCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
