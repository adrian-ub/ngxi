import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNutAndBoltIcon],svg[emojione-nut-and-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b6c0c6" d="M58.7 64H64v-3.4zm4.8-9.8L18.4 9.1l-9.3 9.3l44.4 44.4l-1.4-1.3z"></svg:path><svg:g fill="#7a8891"><svg:path d="m64 54.6l-.5-.4l.5.5zm-10.5 8.2l1.2 1.2z"></svg:path><svg:path d="m58.7 64l5.3-3.4v-5.9l-.5-.5l-11.4 7.3l1.4 1.3l1.2 1.2zm-3.4-18l-11.4 7.3l4.1 4.1l11.4-7.3zm-8.2-8.3L35.7 45l4.1 4.1l11.4-7.2zM30.6 21.3l-11.4 7.3l4.1 4.1l11.4-7.3zm8.2 8.2l-11.4 7.3l4.1 4.1L43 33.6zM22.4 13L11 20.3l4.1 4.1l11.4-7.2z"></svg:path></svg:g><svg:path fill="#4f585b" d="m7.1 17.9l-7.1 7l11 11l7-7.1z"></svg:path><svg:path fill="#8b979e" d="M17.9 7L7.1 17.9L18 28.8L28.9 18z"></svg:path><svg:path fill="#cedae0" d="m24.9 0l-7 7l11 11l7-7z"></svg:path><svg:path fill="#4f585b" d="m28.3 39.1l-7 7.1l11 10.9l7-7z"></svg:path><svg:path fill="#8b979e" d="M39.2 28.3L28.3 39.1l11 11l10.8-10.8z"></svg:path><svg:path fill="#cedae0" d="m46.2 21.3l-7 7l10.9 11l7.1-7.1z"></svg:path>`,
})
export class EmojioneNutAndBoltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
