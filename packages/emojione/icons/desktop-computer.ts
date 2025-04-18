import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneDesktopComputerIcon],svg[emojione-desktop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#212528" d="M62 6c0-2-2-4-4-4H6C4 2 2 4 2 6v38h60z"></svg:path><svg:path fill="#ddd" d="M2 44v4c0 2 2 4 4 4h52c2 0 4-2 4-4v-4z"></svg:path><svg:path fill="#bfbebe" d="M24 54c0 4-4 4-8 4h32c-4 0-8 0-8-4v-2H24z"></svg:path><svg:path fill="#3e4347" d="M6 6h52v34H6z"></svg:path><svg:g fill="#94989b"><svg:circle cx="32" cy="47.9" r="1"></svg:circle><svg:path d="M16 58h32v4H16z"></svg:path></svg:g>`,
})
export class EmojioneDesktopComputerIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
