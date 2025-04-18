import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1BlackCircleIcon],svg[emojione-v1-black-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#354a54" d="M57.55 14.451c9.694 14.11 6.109 33.406-7.999 43.1c-14.11 9.695-33.408 6.112-43.1-7.999c-9.693-14.11-6.112-33.41 8-43.1c14.11-9.692 33.408-6.109 43.1 8"></svg:path>`,
})
export class EmojioneV1BlackCircleIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
