import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCreditCardWirelessIcon],svg[mdi-credit-card-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.93 4.92l1.41 1.41c3.12-3.13 8.19-3.13 11.32 0l1.41-1.41C15.17 1 8.84 1 4.93 4.92m2.83 2.83l1.41 1.41a4.01 4.01 0 0 1 5.66 0l1.41-1.41a6 6 0 0 0-8.48 0M18 11H6a2 2 0 0 0-2 2v8c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2v-8a2 2 0 0 0-2-2m0 6H6v-3h12z"></svg:path>`,
})
export class MdiCreditCardWirelessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
