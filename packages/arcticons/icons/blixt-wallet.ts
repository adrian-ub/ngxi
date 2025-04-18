import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBlixtWalletIcon],svg[arcticons-blixt-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m32.565 20.918l-21.584 3.597L27.408 3.5l-7.725 17.392zm-17.13 6.164l21.584-3.597L20.592 44.5l7.725-17.392z"></svg:path>`,
})
export class ArcticonsBlixtWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
