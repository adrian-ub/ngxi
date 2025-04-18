import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardEditIcon],svg[mdi-credit-card-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.6 11.3c.1-.1.2-.2.4-.2c.1 0 .3.1.4.2l1.2 1.2c.2.2.2.6 0 .8l-1 1l-2-2zM13 18.9l6-6.1l2.1 2.1l-6 6.1H13zm-2 .2v-1l.6-.6l6.5-6.5H4V8h16v1.1l2-2V6c0-1.1-.9-2-2-2H4c-.5 0-1 .2-1.4.6S2 5.5 2 6v12c0 .5.2 1 .6 1.4s.9.6 1.4.6h7z"></svg:path>`,
})
export class MdiCreditCardEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
