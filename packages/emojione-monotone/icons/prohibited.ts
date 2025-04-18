import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneProhibitedIcon],svg[emojione-monotone-prohibited-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 2C15.432 2 2 15.432 2 32.001C2 48.567 15.432 62 32 62s30-13.433 30-29.999C62 15.432 48.568 2 32 2m22 30.001c0 4.629-1.433 8.922-3.876 12.465l-30.591-30.59A21.9 21.9 0 0 1 32 10c12.15 0 22 9.851 22 22.001m-44 0a21.9 21.9 0 0 1 3.876-12.468l30.591 30.591A21.9 21.9 0 0 1 32 54.001c-12.15 0-22-9.852-22-22"></svg:path>`,
})
export class EmojioneMonotoneProhibitedIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
