import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorReward20Icon],svg[fluent-color-reward-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorReward200)" d="m12.367 9.804l3.296-1.683a2.5 2.5 0 0 0 1.363-2.227V4.5a1.5 1.5 0 0 0-1.5-1.5h-3.137L12 6.5z"></svg:path><svg:path fill="url(#fluentColorReward201)" d="M7.61 3H4.5A1.5 1.5 0 0 0 3 4.5v1.395l.007.187a2.5 2.5 0 0 0 1.356 2.04l3.27 1.67L8 6.5z"></svg:path><svg:path fill="url(#fluentColorReward202)" d="M7.5 9.724V3h5v6.737l-1.025.524L10 11z"></svg:path><svg:path fill="url(#fluentColorReward203)" fill-rule="evenodd" d="M6.5 13.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorReward200" x1="17.026" x2="12.072" y1="3.605" y2="8.948" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReward201" x1="3" x2="8" y1="4.83" y2="8.188" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReward202" x1="10" x2="12.751" y1="2" y2="10.061" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#76EB95"></svg:stop><svg:stop offset="1" stop-color="#1EC8B0"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorReward203" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 9.148 -15.257)scale(39.0722 33.4636)" gradientUnits="userSpaceOnUse"><svg:stop offset=".772" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorReward20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
