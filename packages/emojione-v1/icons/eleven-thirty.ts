import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1ElevenThirtyIcon],svg[emojione-v1-eleven-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32.05" cy="32.05" r="29.694" fill="#e0e7ec"></svg:circle><svg:path fill="#98a9b4" d="M0 32.05C0 49.723 14.379 64.1 32.05 64.1c17.673 0 32.05-14.381 32.05-32.05C64.1 14.375 49.722-.01 32.05-.01S0 14.37 0 32.04m6.24 0c0-14.232 11.581-25.813 25.813-25.813c14.234 0 25.815 11.581 25.815 25.813c0 14.234-11.581 25.815-25.815 25.815c-14.232 0-25.813-11.581-25.813-25.815"></svg:path><svg:path fill="#85939c" d="M30.17 53.05c0 1.441.85 2.609 1.894 2.609s1.895-1.168 1.895-2.609V31.93c0-1.442-.85-2.608-1.895-2.608s-1.894 1.167-1.894 2.608z"></svg:path><svg:path fill="#788288" d="M26.82 16.17c-.64-1.292-1.919-1.961-2.855-1.497c-.937.463-1.178 1.886-.54 3.176l6.784 13.698c.639 1.29 1.919 1.959 2.855 1.495s1.179-1.886.539-3.176z"></svg:path>`,
})
export class EmojioneV1ElevenThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
