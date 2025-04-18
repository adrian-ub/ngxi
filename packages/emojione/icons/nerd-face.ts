import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNerdFaceIcon],svg[emojione-nerd-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ffdd67"></svg:circle><svg:g fill="#fff"><svg:circle cx="17" cy="30" r="11"></svg:circle><svg:circle cx="47" cy="30" r="11"></svg:circle></svg:g><svg:g fill="#494949"><svg:path d="M36 27c-1.8-1.3-6.2-1.3-8 0c-1.1-1-.9-2.1-2-3.1c3.1-2.3 8.4-2.7 12 0c-1.1 1-.9 2.1-2 3.1"></svg:path><svg:path d="M47 17c-7.2 0-13 5.8-13 13s5.8 13 13 13s13-5.8 13-13s-5.8-13-13-13m0 23c-5.5 0-10-4.5-10-10s4.5-10 10-10s10 4.5 10 10s-4.5 10-10 10M17 17C9.8 17 4 22.8 4 30s5.8 13 13 13s13-5.8 13-13s-5.8-13-13-13m0 23c-5.5 0-10-4.5-10-10s4.5-10 10-10s10 4.5 10 10s-4.5 10-10 10"></svg:path></svg:g><svg:g fill="#664e27"><svg:ellipse cx="20" cy="30.5" rx="4" ry="5"></svg:ellipse><svg:ellipse cx="44" cy="30.5" rx="4" ry="5"></svg:ellipse><svg:path d="M26.7 51.3c5.8 1.5 12 .4 16.9-3c1.2-.9-1.1-4-2.3-3.2c-3.2 2.3-8.4 3.8-13.7 2.4c-1.3-.3-2.4 3.4-.9 3.8"></svg:path></svg:g><svg:path fill="#917524" d="M53.2 15.7c-3.2-2.7-7.5-3.9-11.7-3.1c-.6.1-1.1-2-.4-2.2c4.8-.9 9.8.5 13.5 3.6c.6.5-1 2.1-1.4 1.7m-30.7-3.3c-4.2-.7-8.5.4-11.7 3.1c-.4.4-2-1.2-1.4-1.7c3.7-3.2 8.7-4.5 13.5-3.6c.7.2.2 2.3-.4 2.2"></svg:path>`,
})
export class EmojioneNerdFaceIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
