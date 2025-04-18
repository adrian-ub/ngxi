import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneHeartSuitIcon],svg[emojione-monotone-heart-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46.063 2c-6.268 0-11.515 3.598-14.062 8.81C29.452 5.598 24.206 2 17.938 2C9.227 2 2 9.361 2 17.938C2 32.406 32.001 62 32.001 62S62 32.406 62 17.938C62 9.361 54.775 2 46.063 2"></svg:path>`,
})
export class EmojioneMonotoneHeartSuitIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
