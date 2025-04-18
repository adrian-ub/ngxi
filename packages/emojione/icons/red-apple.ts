import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRedAppleIcon],svg[emojione-red-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#83bf4f" d="M31.4 4.9c1.1 2.5-.5 10.9-.5 10.9s-7.5-4.4-8.6-6.9s0-5.4 2.5-6.5s5.5 0 6.6 2.5"></svg:path><svg:path fill="#947151" d="M33.3 16.3h-2.6c0-4.3 2.4-11.6 12-11.6v2.6c-8.7 0-9.4 8.2-9.4 9"></svg:path><svg:path fill="#ef4d3c" d="M32 15.8C24.7 8.4 3 8.1 3 29.3C3 42.7 18.8 62 25.7 62c3.1 0 4.2-2 6.1-2c1.8 0 2.4 2 6.4 2C45.1 62 61 42.8 61 29.3C61 8.1 39.3 8.4 32 15.8"></svg:path>`,
})
export class EmojioneRedAppleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
