import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRightArrowCurvingUpIcon],svg[emojione-right-arrow-curving-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M40.4 19.5v21.2c0 6.8-5.6 12.3-12.5 12.3c-3.3 0-6.5-1.3-8.9-3.6l5.1-5c1 1 2.4 1.5 3.8 1.5c3 0 5.4-2.4 5.4-5.3V19.5h-4.6l8.2-8.5l8.2 8.5z"></svg:path>`,
})
export class EmojioneRightArrowCurvingUpIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
