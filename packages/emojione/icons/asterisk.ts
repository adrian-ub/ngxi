import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneAsteriskIcon],svg[emojione-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#4fd1d9"></svg:circle><svg:path fill="#fff" d="M45.5 36.3c.4.2.5.5.5.9c0 .5-.3 1.2-1 2.3c-.6 1.1-1.1 1.7-1.5 2c-.4.2-.7.2-1.1 0l-8.6-6.2L35 45.8c.1.4-.1.7-.5.9s-1.3.3-2.5.3s-2.1-.1-2.5-.3s-.6-.5-.5-.9l1.1-10.5l-8.5 6.2c-.3.2-.7.2-1.1 0s-.9-.9-1.5-2c-.6-1-.9-1.8-.9-2.3s.2-.8.5-.9l9.7-4.3l-9.7-4.3c-.4-.2-.6-.5-.5-1c0-.5.3-1.2.9-2.3c.6-1 1.1-1.7 1.5-1.9s.8-.2 1.1 0l8.5 6.2L29 18.3c-.1-.4.1-.7.5-1s1.3-.3 2.5-.3s2.1.1 2.5.3s.6.5.5 1l-1.1 10.5l8.6-6.2c.3-.2.7-.2 1.1 0s.9.9 1.5 2c.6 1 .9 1.8 1 2.2c0 .5-.1.8-.5 1L35.8 32z"></svg:path>`,
})
export class EmojioneAsteriskIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
