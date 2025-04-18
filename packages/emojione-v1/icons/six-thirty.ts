import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1SixThirtyIcon],svg[emojione-v1-six-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e0e7ec" d="M61.63 31.994c0 16.365-13.271 29.636-29.638 29.636c-16.369 0-29.637-13.271-29.637-29.636c0-16.371 13.269-29.639 29.637-29.639c16.367 0 29.638 13.269 29.638 29.639"></svg:path><svg:path fill="#98a9b4" d="M31.994 0C14.353 0 0 14.353 0 31.994c0 17.642 14.353 31.994 31.994 31.994c17.643 0 31.992-14.354 31.992-31.994S49.637 0 31.994 0m0 57.76c-14.207 0-25.766-11.56-25.766-25.766c0-14.207 11.559-25.766 25.766-25.766s25.764 11.559 25.764 25.766S46.2 57.76 31.994 57.76"></svg:path><svg:path fill="#85939c" d="M33.871 52.95c0 1.437-.848 2.603-1.89 2.603s-1.89-1.166-1.89-2.603V31.87c0-1.438.849-2.605 1.89-2.605c1.042 0 1.89 1.167 1.89 2.605z"></svg:path><svg:path fill="#788288" d="M30.1 31.871c0-1.438.845-2.605 1.888-2.605s1.891 1.168 1.891 2.605l.006 15.253c0 1.437-.851 2.604-1.889 2.603c-1.043.002-1.892-1.166-1.892-2.601z"></svg:path>`,
})
export class EmojioneV1SixThirtyIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
