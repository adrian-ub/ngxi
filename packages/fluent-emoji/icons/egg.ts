import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiEggIcon],svg[fluent-emoji-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#A6704C" d="M16.331 2c-2.57 0-4.98 1.28-6.42 3.4l-.13.19A21.92 21.92 0 0 0 6.101 20l.08.8c.5 5.21 4.88 9.18 10.11 9.18c5.25 0 9.63-3.99 10.11-9.22l.09-.93a21.9 21.9 0 0 0-3.78-14.48A7.77 7.77 0 0 0 16.331 2"></svg:path><svg:path fill="url(#f438id0)" d="M16.331 2c-2.57 0-4.98 1.28-6.42 3.4l-.13.19A21.92 21.92 0 0 0 6.101 20l.08.8c.5 5.21 4.88 9.18 10.11 9.18c5.25 0 9.63-3.99 10.11-9.22l.09-.93a21.9 21.9 0 0 0-3.78-14.48A7.77 7.77 0 0 0 16.331 2"></svg:path><svg:path fill="url(#f438id1)" d="M16.331 2c-2.57 0-4.98 1.28-6.42 3.4l-.13.19A21.92 21.92 0 0 0 6.101 20l.08.8c.5 5.21 4.88 9.18 10.11 9.18c5.25 0 9.63-3.99 10.11-9.22l.09-.93a21.9 21.9 0 0 0-3.78-14.48A7.77 7.77 0 0 0 16.331 2"></svg:path><svg:defs><svg:radialgradient id="f438id0" cx="0" cy="0" r="1" gradientTransform="rotate(89.708 6.161 16.62)scale(24.5003 16.2938)" gradientUnits="userSpaceOnUse"><svg:stop offset=".092" stop-color="#FFCA7F"></svg:stop><svg:stop offset=".562" stop-color="#E5945B"></svg:stop><svg:stop offset=".838" stop-color="#B87241"></svg:stop><svg:stop offset="1" stop-color="#9A6240"></svg:stop></svg:radialgradient><svg:radialgradient id="f438id1" cx="0" cy="0" r="1" gradientTransform="rotate(97.431 3.208 12.778)scale(22.5645 27.4892)" gradientUnits="userSpaceOnUse"><svg:stop offset=".553" stop-color="#974668" stop-opacity="0"></svg:stop><svg:stop offset=".904" stop-color="#984663"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentEmojiEggIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
