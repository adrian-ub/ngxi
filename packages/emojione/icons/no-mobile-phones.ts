import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneNoMobilePhonesIcon],svg[emojione-no-mobile-phones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ff5a79"></svg:circle><svg:circle cx="32" cy="32" r="24" fill="#333"></svg:circle><svg:path fill="#fff" d="M37.8 15H26.2c-2.1 0-3.8 1.7-3.8 3.8v26.4c0 2.1 1.7 3.8 3.8 3.8h11.5c2.1 0 3.8-1.7 3.8-3.8V18.8c.1-2.1-1.6-3.8-3.7-3.8m-7.7 1.4h3.8c.3 0 .5.2.5.5s-.2.5-.5.5h-3.8c-.3 0-.5-.2-.5-.5s.3-.5.5-.5M32 47.1c-.6 0-1.2-.5-1.2-1.1s.5-1.1 1.2-1.1c.6 0 1.2.5 1.2 1.1s-.6 1.1-1.2 1.1m7.7-4.1H24.3V18.8h15.4z"></svg:path><svg:path fill="#ff5a79" d="m9.23 13.474l4.243-4.243l41.295 41.295l-4.243 4.242z"></svg:path>`,
})
export class EmojioneNoMobilePhonesIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
