import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCashRegisterIcon],svg[mdi-cash-register-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 17h20v4H2zM6.25 7H9V6H6V3h8v3h-3v1h6.8c1 0 2 1 2.2 2l.5 7h-17l.55-7c0-1 1-2 2.2-2M13 9v2h5V9zM6 9v1h2V9zm3 0v1h2V9zm-3 2v1h2v-1zm3 0v1h2v-1zm-3 2v1h2v-1zm3 0v1h2v-1zM7 4v1h6V4z"></svg:path>`,
})
export class MdiCashRegisterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
