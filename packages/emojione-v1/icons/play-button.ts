import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1PlayButtonIcon],svg[emojione-v1-play-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1b75bb" d="M63.916 57.025a6.89 6.89 0 0 1-6.889 6.895H6.887A6.89 6.89 0 0 1 0 57.025V6.891A6.89 6.89 0 0 1 6.887 0h50.14a6.89 6.89 0 0 1 6.889 6.891z"></svg:path><svg:path fill="#fff" d="M22.452 11.817c-2.849.194-5.226 1.439-6.269 3.143v34c1.046 1.708 3.432 2.955 6.285 3.144l27.564-20.07l-27.58-20.22"></svg:path>`,
})
export class EmojioneV1PlayButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
