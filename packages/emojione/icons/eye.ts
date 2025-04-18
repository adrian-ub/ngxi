import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneEyeIcon],svg[emojione-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#231f20" d="M62 32S51.9 52 32 52S2 32 2 32s10.1-20 30-20s30 20 30 20"></svg:path><svg:path fill="#fff" d="M57 32s-8.4 16.7-25 16.7S7 32 7 32s8.4-16.7 25-16.7S57 32 57 32"></svg:path><svg:path fill="#42ade2" d="M45.4 32c0 7.5-6 13.5-13.5 13.5s-13.5-6-13.5-13.5s6-13.5 13.5-13.5s13.5 6 13.5 13.5"></svg:path><svg:path fill="#231f20" d="M39.4 32c0 4.1-3.4 7.5-7.5 7.5s-7.5-3.4-7.5-7.5s3.4-7.5 7.5-7.5s7.5 3.4 7.5 7.5"></svg:path>`,
})
export class EmojioneEyeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
