import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FlagForBeninIcon],svg[emojione-v1-flag-for-benin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ec1c24" d="M0 43c0 6.075 3.373 11 10 11h44c6.627 0 10-4.925 10-11V32H0z"></svg:path><svg:path fill="#f9cb38" d="M54 10H10C3.373 10 0 14.925 0 21v12h64V21c0-6.075-3.373-11-10-11"></svg:path><svg:path fill="#00785e" d="M10 10C3.373 10 0 14.925 0 21v22c0 6.075 3.373 11 10 11h12V10z"></svg:path>`,
})
export class EmojioneV1FlagForBeninIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
