import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneYenBanknoteIcon],svg[emojione-yen-banknote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#89664c" d="M0 46.5h64v9H0z"></svg:path><svg:path fill="#d3976e" d="M0 8.5h64v38H0z"></svg:path><svg:path fill="#94989b" d="M24 46.5h16v9H24z"></svg:path><svg:path fill="#89664c" d="M4 12.5h56v30H4z"></svg:path><svg:path fill="#d3976e" d="M7 15.5h50v24H7z"></svg:path><svg:circle cx="45" cy="27.5" r="8" fill="#89664c"></svg:circle><svg:path fill="#d0d0d0" d="M24 8.5h16v38H24z"></svg:path><svg:path fill="#fff" d="m22 21.2l-1.2-1.7l-4.8 4.6l-4.8-4.6l-1.2 1.7l4.5 4.3h-2.3v2.2H15V30h-2.8v2.2H15v3.3h2v-3.3h2.8V30H17v-2.3h2.8v-2.2h-2.3z"></svg:path>`,
})
export class EmojioneYenBanknoteIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
