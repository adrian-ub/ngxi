import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneStarOfDavidIcon],svg[emojione-star-of-david-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c28fef" d="M58 17.4H41L32 2l-9 15.4H6L14.5 32L6 46.6h17L32 62l9-15.4h17L49.5 32zM51.9 21l-4.4 7.5l-4.4-7.5zM32 9l4.9 8.4H27zM12.1 21h8.8l-4.4 7.5zm0 22l4.4-7.5l4.4 7.5zM32 55l-4.9-8.4H37zm7-12H25l-6.4-11L25 21h14l6.4 11zm12.9 0h-8.8l4.4-7.5z"></svg:path>`,
})
export class EmojioneStarOfDavidIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
