import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorReward24Icon],svg[fluent-color-reward-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorReward240)" d="m16 11.65l4.662-2.448A2.5 2.5 0 0 0 22 6.99V3.75A1.75 1.75 0 0 0 20.25 2H16l-1 5z"></svg:path><svg:path fill="url(#fluentColorReward241)" d="M8 2H3.75A1.75 1.75 0 0 0 2 3.75v3.239a2.5 2.5 0 0 0 1.338 2.213L8 11.65l1-4.661z"></svg:path><svg:path fill="url(#fluentColorReward242)" d="M8 11.65V2h8v9.65l-3.187 1.673a1.75 1.75 0 0 1-1.626 0z"></svg:path><svg:path fill="url(#fluentColorReward243)" d="M17 17a5 5 0 1 1-10 0a5 5 0 0 1 10 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorReward240" x1="22" x2="14.966" y1="2.858" y2="10.309" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReward241" x1="2" x2="9.064" y1="4.599" y2="9.274" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReward242" x1="12" x2="15.64" y1=".559" y2="12.405" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#76EB95"></svg:stop><svg:stop offset="1" stop-color="#1EC8B0"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorReward243" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 14.048 -25.06)scale(55.8175 47.8051)" gradientUnits="userSpaceOnUse"><svg:stop offset=".772" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorReward24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
