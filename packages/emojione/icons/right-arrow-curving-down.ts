import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRightArrowCurvingDownIcon],svg[emojione-right-arrow-curving-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M40.4 45.1V22.9c0-7.1-5.6-12.9-12.5-12.9c-3.3 0-6.5 1.3-8.9 3.8l5.1 5.2c1-1 2.4-1.6 3.8-1.6c3 0 5.4 2.5 5.4 5.5v22.2h-4.6l8.2 8.9l8.2-8.9z"></svg:path>`,
})
export class EmojioneRightArrowCurvingDownIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
