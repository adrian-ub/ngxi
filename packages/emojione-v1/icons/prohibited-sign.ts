import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1ProhibitedSignIcon],svg[emojione-v1-prohibited-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#be1e2d"><svg:path d="M53.28 47.659Q34.795 29.177 16.306 10.687c-5.486-5.486-11.1.129-5.613 5.615l36.972 36.972c5.487 5.491 11.1-.128 5.615-5.615"></svg:path><svg:path d="M31.983 0C14.349 0 0 14.349 0 31.983s14.349 31.983 31.983 31.983s31.983-14.349 31.983-31.983S49.618 0 31.983 0m0 56.04c-13.266 0-24.06-10.79-24.06-24.06S18.715 7.92 31.983 7.92s24.06 10.793 24.06 24.06s-10.79 24.05-24.06 24.05"></svg:path></svg:g>`,
})
export class EmojioneV1ProhibitedSignIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
