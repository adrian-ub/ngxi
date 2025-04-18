import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHeliumWalletIcon],svg[arcticons-helium-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:path d="M19.648 31.474a4.072 4.072 0 1 1-3.25-3.124m11.904-11.71a4.072 4.072 0 1 1 3.25 3.123m-.07.045a8.576 8.576 0 0 1-11.872 11.56m-3.17-3.153a8.576 8.576 0 0 1 11.873-11.56"></svg:path><svg:circle cx="24" cy="24" r="2.937"></svg:circle></svg:g>`,
})
export class ArcticonsHeliumWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
