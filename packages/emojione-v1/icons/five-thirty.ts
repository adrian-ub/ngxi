import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1FiveThirtyIcon],svg[emojione-v1-five-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="31.671" cy="31.671" r="29.34" fill="#e0e7ec"></svg:circle><svg:path fill="#98a9b4" d="M31.673 0C14.209 0 0 14.208 0 31.673s14.209 31.671 31.673 31.671s31.671-14.207 31.671-31.671C63.346 14.208 49.139 0 31.673 0m0 57.18c-14.07 0-25.507-11.442-25.507-25.508c0-14.07 11.442-25.508 25.507-25.508c14.06 0 25.505 11.442 25.505 25.507c0 14.06-11.442 25.509-25.505 25.509"></svg:path><svg:path fill="#85939c" d="M33.531 52.42c0 1.425-.84 2.578-1.871 2.578s-1.872-1.153-1.872-2.578V31.553c0-1.427.839-2.579 1.872-2.579c1.031 0 1.871 1.152 1.871 2.579z"></svg:path><svg:path fill="#788288" d="M41.744 43.35c.734 1.215.611 2.637-.271 3.168c-.887.535-2.199-.022-2.935-1.242l-7.798-12.93c-.732-1.22-.608-2.643.276-3.172c.882-.533 2.199.022 2.931 1.237z"></svg:path>`,
})
export class EmojioneV1FiveThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
