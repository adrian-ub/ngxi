import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorReward16Icon],svg[fluent-color-reward-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorReward160)" d="m10 8l3.295-2.06A1.5 1.5 0 0 0 14 4.67V3.5A1.5 1.5 0 0 0 12.5 2H10l-.5 3z"></svg:path><svg:path fill="url(#fluentColorReward161)" d="M6 2H3.5A1.5 1.5 0 0 0 2 3.5v1.169c0 .517.266.998.705 1.272L6 8l.5-3z"></svg:path><svg:path fill="url(#fluentColorReward162)" d="M10 2H6v6l1.205.753a1.5 1.5 0 0 0 1.59 0L10 8z"></svg:path><svg:path fill="url(#fluentColorReward163)" d="M11 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorReward160" x1="14" x2="9.637" y1="2.534" y2="7.312" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReward161" x1="2" x2="6.447" y1="3.616" y2="6.66" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#52D17C"></svg:stop><svg:stop offset="1" stop-color="#1A7F7C"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReward162" x1="8" x2="10.568" y1="1.127" y2="8.025" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#76EB95"></svg:stop><svg:stop offset="1" stop-color="#1EC8B0"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorReward163" cx="0" cy="0" r="1" gradientTransform="rotate(56.615 8.086 -13.893)scale(33.4905 28.6831)" gradientUnits="userSpaceOnUse"><svg:stop offset=".772" stop-color="#FFCD0F"></svg:stop><svg:stop offset=".991" stop-color="#E67505"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorReward16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
