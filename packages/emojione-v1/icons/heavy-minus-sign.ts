import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1HeavyMinusSignIcon],svg[emojione-v1-heavy-minus-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#405866" d="M58.05 26.705H5.82c-7.75 0-7.75 12.02 0 12.02h52.23c7.752 0 7.752-12.02 0-12.02"></svg:path>`,
})
export class EmojioneV1HeavyMinusSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
