import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneProhibitedIcon],svg[emojione-prohibited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5a79" d="M32 2C15.4 2 2 15.4 2 32s13.4 30 30 30s30-13.4 30-30S48.6 2 32 2m22 30c0 4.6-1.4 8.9-3.9 12.5L19.5 13.9C23.1 11.4 27.4 10 32 10c12.2 0 22 9.9 22 22m-44 0c0-4.6 1.4-8.9 3.9-12.5l30.6 30.6C40.9 52.6 36.6 54 32 54c-12.1 0-22-9.9-22-22"></svg:path>`,
})
export class EmojioneProhibitedIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
