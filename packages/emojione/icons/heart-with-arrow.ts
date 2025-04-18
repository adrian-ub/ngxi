import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneHeartWithArrowIcon],svg[emojione-heart-with-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ffce31" d="m12.7 54.6l-2-2.1l19.1-19l2.1 2z"></svg:path><svg:path fill="#42ade2" d="M4.2 61s-.7-8.3 6.4-15.3l2.1 6.9z"></svg:path><svg:path fill="#467591" d="M4.2 61s8.3.7 15.4-6.4l-6.9-2.1z"></svg:path><svg:path fill="#ff5a79" d="M54.7 24.3c-5.7-15-24.2-8.3-26-.8c-2.4-8-20.4-14-26 .8c-6.1 16.4 23.8 31.2 26 33.6c2.2-1.9 32.2-17.4 26-33.6"></svg:path><svg:path fill="#ffce31" d="m37.1 30.1l-2.4-2.3l16.8-16.7l2.3 2.4z"></svg:path><svg:path fill="#467591" d="M40.9 21.7s-.4-9.9 8.4-18.7l2.2 8.1zm2.3 2.3s9.9.4 18.8-8.4l-8.2-2.2z"></svg:path>`,
})
export class EmojioneHeartWithArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
