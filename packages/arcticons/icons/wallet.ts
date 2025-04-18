import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWalletIcon],svg[arcticons-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.451 29.914v5.893a3.946 3.946 0 0 1-3.946 3.947H8.446A3.946 3.946 0 0 1 4.5 35.807V12.193a3.946 3.946 0 0 1 3.947-3.947h30.058a3.946 3.946 0 0 1 3.946 3.947v6.098"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.294 29.925H31.925a5.82 5.82 0 0 1-5.822-5.822h0a5.82 5.82 0 0 1 5.822-5.823h10.37c.665 0 1.205.54 1.205 1.206v9.234c0 .665-.54 1.205-1.206 1.205"></svg:path><svg:circle cx="32.458" cy="24.171" r="2.705" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
