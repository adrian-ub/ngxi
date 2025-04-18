import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInfinixWalletIcon],svg[arcticons-infinix-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m22.02 42.5l17.795-17.778a5.377 5.377 0 0 0 .022-7.604l-.022-.023l-10.019-10.01a5.39 5.39 0 0 0-7.62-.013l-.013.013L8.185 21.053a5.377 5.377 0 0 0-.022 7.604l.022.022zl12.748-3.672c1.814-.521 1.992-2.202.903-3.131l-3.38-2.885"></svg:path>`,
})
export class ArcticonsInfinixWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
