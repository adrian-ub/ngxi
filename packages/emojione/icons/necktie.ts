import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNecktieIcon],svg[emojione-necktie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d0d0" d="M64 59.7c0 2.4-2.2 4.3-4.9 4.3H4.9C2.2 64 0 62.1 0 59.7V9.1c0-2.4 2.2-4.3 4.9-4.3h54.2c2.7 0 4.9 1.9 4.9 4.3z"></svg:path><svg:g fill="#94989b"><svg:path d="M48.9 9.5H15.1L18.4 0h27.2z"></svg:path><svg:path d="m18.4 2.9l-3.3 6.6l12 17.7V15.1zm27.2 0l3.3 6.6l-12 17.7V15.1z"></svg:path></svg:g><svg:path fill="#fff" d="m18.4 0l-3.3 9.5l12 14.9V12.2zm27.2 0l3.3 9.5l-12 14.9V12.2z"></svg:path><svg:path fill="#42ade2" d="M37.7 24.4H26.3L23 56.8l9.1 7.2l8.9-7.2z"></svg:path><svg:path fill="#428bc1" d="m38.1 27.6l-.3-3.3H26.3l-.3 3.3c2.4 1.8 9.5 1.7 12.1 0"></svg:path><svg:path fill="#42ade2" d="M38.6 24.4c-2.2 2.2-11.2 2.4-13.1 0c-2-2.5 1.6-12.2 1.6-12.2s3.7 1.4 4.9 1.4s4.9-1.4 4.9-1.4s4 9.9 1.7 12.2"></svg:path>`,
})
export class EmojioneNecktieIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
