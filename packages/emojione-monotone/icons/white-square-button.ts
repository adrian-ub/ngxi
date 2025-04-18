import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneWhiteSquareButtonIcon],svg[emojione-monotone-white-square-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2v60h60V2zm58 58H4V4h56z"></svg:path><svg:path fill="currentColor" d="M10 10h44v44H10z"></svg:path>`,
})
export class EmojioneMonotoneWhiteSquareButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
