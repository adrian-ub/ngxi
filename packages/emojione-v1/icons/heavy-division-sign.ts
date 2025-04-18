import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1HeavyDivisionSignIcon],svg[emojione-v1-heavy-division-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#405866" d="M58.02 26.556H6.135c-7.699 0-7.699 11.94 0 11.94H58.02c7.701 0 7.701-11.94 0-11.94M34.899 6.203h-5.948c-7.699 0-7.699 13.12 0 13.12h5.948c7.701 0 7.701-13.12 0-13.12m.161 39.68h-5.949c-7.698 0-7.698 13.12 0 13.12h5.949c7.7 0 7.7-13.12 0-13.12"></svg:path>`,
})
export class EmojioneV1HeavyDivisionSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
