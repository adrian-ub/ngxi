import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusWalletIcon],svg[nimbus-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.25 1.5H1.75A1.25 1.25 0 0 0 .5 2.75v1.11a1.85 1.85 0 0 1 1.25-.48v-.63h12.5v.63a1.85 1.85 0 0 1 1.25.48V2.75a1.25 1.25 0 0 0-1.25-1.25m0 2.5H1.75A1.25 1.25 0 0 0 .5 5.25v1.11a1.85 1.85 0 0 1 1.25-.48v-.63h12.5v.63a1.85 1.85 0 0 1 1.25.48V5.25A1.25 1.25 0 0 0 14.25 4m0 2.5H10.5A2.43 2.43 0 0 1 8 8.84A2.43 2.43 0 0 1 5.5 6.5H1.75A1.25 1.25 0 0 0 .5 7.75v5.5a1.25 1.25 0 0 0 1.25 1.25h12.5a1.25 1.25 0 0 0 1.25-1.25v-5.5a1.25 1.25 0 0 0-1.25-1.25m0 6.75H1.75v-5.5h2.73A3.76 3.76 0 0 0 8 10.09a3.75 3.75 0 0 0 3.52-2.34h2.73z"></svg:path>`,
})
export class NimbusWalletIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
