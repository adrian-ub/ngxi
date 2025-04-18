import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneYinYangIcon],svg[emojione-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f5f5f5" d="M53.2 10.8c11.7 11.7 11.7 30.7 0 42.4c-5.9 5.9-15.4 5.9-21.2 0S26.1 37.9 32 32s5.9-15.4 0-21.2s-15.4-5.9-21.2 0C22.5-.9 41.5-.9 53.2 10.8"></svg:path><svg:g fill="#3e4347"><svg:path d="M10.8 53.2C-.9 41.5-.9 22.5 10.8 10.8c5.9-5.9 15.4-5.9 21.2 0c5.9 5.9 5.9 15.4 0 21.2s-5.9 15.4 0 21.2s15.4 5.9 21.2 0c-11.7 11.7-30.7 11.7-42.4 0"></svg:path><svg:circle cx="42.6" cy="42.6" r="5.6"></svg:circle></svg:g><svg:circle cx="21.4" cy="21.4" r="5.6" fill="#f5f5f5"></svg:circle>`,
})
export class EmojioneYinYangIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
