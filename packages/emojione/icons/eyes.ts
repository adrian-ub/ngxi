import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneEyesIcon],svg[emojione-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#dde8e3" d="M2 31.4C2 40.2 5.7 53 17 53s15-12.8 15-21.6c0-27.2-30-27.2-30 0m30 0C32 40.2 35.7 53 47 53s15-12.8 15-21.6c0-27.2-30-27.2-30 0"></svg:path><svg:path fill="#fff" d="M2.8 32.1c0 7.6 2.4 19.3 12 19.3s12-11.8 12-19.3c-.1-26-24-26-24 0m30 0c0 7.6 2.4 19.3 12 19.3s12-11.8 12-19.3c-.1-26-24-26-24 0"></svg:path><svg:path fill="#493b30" d="M2.8 32.2c0 6.2 4.4 11 9.7 11c5.4 0 9.7-4.8 9.7-11c0-15.2-19.4-15.2-19.4 0m30 0c0 6.2 4.4 11 9.7 11c5.4 0 9.7-4.8 9.7-11c0-15.2-19.4-15.2-19.4 0"></svg:path>`,
})
export class EmojioneEyesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
