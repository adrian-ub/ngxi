import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneUpDownArrowIcon],svg[emojione-up-down-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="m32 52l16-15.5H36.6v-9H48L32 12L16 27.5h11.4v9H16z"></svg:path>`,
})
export class EmojioneUpDownArrowIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
