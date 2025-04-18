import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWomensRoomIcon],svg[emojione-womens-room-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ff5a79"></svg:circle><svg:path fill="#fff" d="M36 23h-8c-1 0-2 1-2 2l-3 11h3l2-9v4l-2 9h2v11h3V40h2v11h3V40h2l-2-9v-4l2 9h3l-3-11c0-1-1-2-2-2m0-4c0 1-1 2-2 2h-4c-1 0-2-1-2-2v-4c0-1 1-2 2-2h4c1 0 2 1 2 2z"></svg:path>`,
})
export class EmojioneWomensRoomIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
