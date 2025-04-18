import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1HeavyPlusSignIcon],svg[emojione-v1-heavy-plus-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#405866" d="M58.18 25.98H38.03V5.83c0-7.77-12.05-7.77-12.05 0v20.15H5.83c-7.768 0-7.768 12.05 0 12.05h20.15v20.15c0 7.77 12.05 7.77 12.05 0V38.03h20.15c7.769 0 7.769-12.05 0-12.05"></svg:path>`,
})
export class EmojioneV1HeavyPlusSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
