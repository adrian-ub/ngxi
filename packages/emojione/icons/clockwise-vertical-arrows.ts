import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneClockwiseVerticalArrowsIcon],svg[emojione-clockwise-vertical-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4d5357" d="m39.5 61.1l-6.4-8.7h-.8c-5.6 0-10.2-3.6-10.2-8V25h8l-14-19.2L2 25h8v19.4c0 4.7 2.3 9.1 6.6 12.4c4.2 3.3 9.8 5.2 15.8 5.2c2.4 0 4.8-.3 7.1-.9m-7.8-49.5c5.6 0 10.2 3.6 10.2 8v19.5h-8L48 58.3l14-19.2h-8V19.6c0-4.7-2.3-9.1-6.5-12.4C43.3 3.8 37.7 2 31.7 2q-3.75 0-7.2.9l6.4 8.7z"></svg:path>`,
})
export class EmojioneClockwiseVerticalArrowsIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
