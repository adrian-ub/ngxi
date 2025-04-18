import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMetroIcon],svg[emojione-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#3e4347"></svg:circle><svg:path fill="#94989b" d="m20.2 46.3l-6.5 9.4c.8.6 1.7 1.2 2.5 1.8l7.3-11.1c0-.1-3.3-.1-3.3-.1"></svg:path><svg:path fill="#e6e6e6" d="M20.2 46.3h-3.3l-5.6 7.3c.8.7 1.5 1.4 2.4 2z"></svg:path><svg:path fill="#94989b" d="M43.8 46.3h-3.3l7.3 11.1c.9-.5 1.7-1.1 2.5-1.8z"></svg:path><svg:path fill="#e6e6e6" d="m43.8 46.3l6.5 9.4c.8-.6 1.6-1.3 2.4-2l-5.6-7.3h-3.3z"></svg:path><svg:path fill="#c7e755" d="M49.3 44.2c0 1.8-1.4 3.2-3.2 3.2H17.9c-1.8 0-3.2-1.4-3.2-3.2V20.7c0-12.6 34.5-12.6 34.5 0z"></svg:path><svg:path fill="#3e4347" d="M47.2 40.5c0 1.1-.9 1.9-2 1.9h-4.7c-1.1 0-2-.9-2-1.9c0-1.1.9-1.9 2-1.9h4.7c1.2 0 2 .9 2 1.9m-30.4 0c0-1.1.9-1.9 2-1.9h4.7c1.1 0 2 .9 2 1.9c0 1.1-.9 1.9-2 1.9h-4.7c-1.2.1-2-.8-2-1.9m30.4-10.1c0 1.5-1.2 2.7-2.7 2.7h-25c-1.5 0-2.7-1.2-2.7-2.7v-8.6c0-1.5 1.2-2.7 2.7-2.7h25.1c1.5 0 2.7 1.2 2.7 2.7v8.6z"></svg:path><svg:g fill="#fff"><svg:circle cx="21.1" cy="40.5" r="1.7"></svg:circle><svg:circle cx="42.9" cy="40.5" r="1.7"></svg:circle></svg:g>`,
})
export class EmojioneMetroIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
