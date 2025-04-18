import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBlackSquareButtonIcon],svg[emojione-black-square-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#333" d="M2 2h60v60H2z"></svg:path><svg:path fill="#d0d0d0" d="M10 10h44v44H10z"></svg:path>`,
})
export class EmojioneBlackSquareButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
