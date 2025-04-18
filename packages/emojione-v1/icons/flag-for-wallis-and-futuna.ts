import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForWallisAndFutunaIcon],svg[emojione-v1-flag-for-wallis-and-futuna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e6e7e8" d="M22 11h20v44H22z"></svg:path><svg:path fill="#00209f" d="M10 11C3.373 11 0 15.925 0 22v22c0 6.075 3.373 11 10 11h12V11z"></svg:path><svg:path fill="#ec1c24" d="M54 11H42v44h12c6.627 0 10-4.925 10-11V22c0-6.075-3.373-11-10-11"></svg:path>`,
})
export class EmojioneV1FlagForWallisAndFutunaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
