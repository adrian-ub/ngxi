import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneV1SevenOclockIcon],svg[emojione-v1-seven-oclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g transform="scale(.99881 .99878)"><svg:circle cx="32.04" cy="32.04" r="29.681" fill="#e0e7ec"></svg:circle><svg:path fill="#98a9b4" d="M32.04 0C14.374 0 0 14.372 0 32.04c0 17.666 14.374 32.04 32.04 32.04s32.04-14.372 32.04-32.04S49.71 0 32.04 0m0 57.841c-14.228 0-25.805-11.575-25.805-25.801c0-14.229 11.577-25.805 25.805-25.805c14.226 0 25.797 11.575 25.797 25.805c0 14.226-11.571 25.801-25.797 25.801"></svg:path><svg:path fill="#85939c" d="M30.16 11.05c0-1.438.849-2.604 1.895-2.604c1.042 0 1.891 1.167 1.891 2.604v21.11c0 1.441-.849 2.609-1.891 2.609c-1.046 0-1.895-1.168-1.895-2.609z"></svg:path><svg:path fill="#788288" d="M26.805 47.923c-.64 1.29-1.92 1.96-2.854 1.497c-.936-.464-1.177-1.888-.539-3.179l6.78-13.69c.638-1.289 1.918-1.959 2.854-1.496c.935.463 1.179 1.886.544 3.177z"></svg:path></svg:g>`,
})
export class EmojioneV1SevenOclockIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
