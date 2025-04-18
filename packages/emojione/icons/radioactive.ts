import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRadioactiveIcon],svg[emojione-radioactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#3e4347"></svg:circle><svg:circle cx="32" cy="32" r="27" fill="#ffe62e"></svg:circle><svg:g fill="#3e4347"><svg:circle cx="32" cy="32" r="5"></svg:circle><svg:path d="M8 28.8L25.1 31c.2-1.9 1.2-3.5 2.7-4.6L17.3 12.6c-5 3.9-8.5 9.6-9.3 16.2m24 10c-.9 0-1.8-.2-2.7-.5l-6.6 15.9c2.9 1.2 6 1.9 9.3 1.9s6.4-.7 9.3-1.9l-6.6-15.9c-.9.3-1.8.5-2.7.5m6.9-7.8L56 28.8c-.8-6.6-4.3-12.3-9.3-16.1L36.2 26.4c1.4 1.1 2.4 2.7 2.7 4.6"></svg:path></svg:g>`,
})
export class EmojioneRadioactiveIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
