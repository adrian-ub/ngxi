import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneRadioIcon],svg[emojione-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0d0d0" d="M12.5 17.4c2-.4 4.1-.8 6.1-1.2c3.9-.8 7.9-1.6 11.8-2.4c4.1-.8 8.2-1.6 12.3-2.5c3.5-.7 6.9-1.4 10.4-2.1l6-1.2c.2 0 .4-.1.6-.1c.3-.1.5-.5.4-.8c-.1-.4-.4-.5-.8-.4c-1 .3-2.2.5-3.3.7c-3 .6-6 1.2-8.9 1.8c-3.9.8-7.9 1.6-11.8 2.4c-4.1.8-8.2 1.6-12.3 2.5c-3.5.7-6.9 1.4-10.4 2.1l-6 1.2c-.2 0-.3.1-.5.1z"></svg:path><svg:path fill="#d3976e" d="M64 53.3c0 2.1-1.9 4-4 4H4c-2.1 0-4-1.9-4-4v-32c0-2.1 1.9-4 4-4h56c2.1 0 4 1.9 4 4z"></svg:path><svg:g fill="#594640"><svg:circle cx="16.9" cy="36.6" r="1.6"></svg:circle><svg:circle cx="20.5" cy="33" r="1.6"></svg:circle><svg:circle cx="24.1" cy="29.4" r="1.6"></svg:circle><svg:circle cx="13.3" cy="40.2" r="1.6"></svg:circle><svg:circle cx="13.3" cy="33" r="1.6"></svg:circle><svg:circle cx="13.3" cy="25.7" r="1.6"></svg:circle><svg:circle cx="16.9" cy="29.4" r="1.6"></svg:circle><svg:circle cx="9.7" cy="36.6" r="1.6"></svg:circle><svg:circle cx="20.5" cy="40.2" r="1.6"></svg:circle><svg:circle cx="24.1" cy="43.8" r="1.6"></svg:circle><svg:circle cx="24.1" cy="36.6" r="1.6"></svg:circle><svg:circle cx="20.5" cy="25.7" r="1.6"></svg:circle><svg:circle cx="27.8" cy="40.2" r="1.6"></svg:circle><svg:circle cx="16.9" cy="43.8" r="1.6"></svg:circle><svg:circle cx="9.7" cy="43.8" r="1.6"></svg:circle><svg:circle cx="6" cy="40.2" r="1.6"></svg:circle><svg:circle cx="13.3" cy="47.5" r="1.6"></svg:circle><svg:circle cx="9.7" cy="29.4" r="1.6"></svg:circle><svg:circle cx="27.8" cy="33" r="1.6"></svg:circle><svg:circle cx="6" cy="33" r="1.6"></svg:circle><svg:circle cx="20.5" cy="47.5" r="1.6"></svg:circle></svg:g><svg:path fill="#fff" d="M59.7 25.7c0 1.8-1.4 3.2-3.2 3.2H37.3c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2h19.2c1.7 0 3.2 1.5 3.2 3.2"></svg:path><svg:circle cx="39.8" cy="39" r="4.8" fill="#594640"></svg:circle><svg:path fill="#ed4c5c" d="m41.9 28.9l-.5-4.3l-.4 4.3z"></svg:path><svg:g fill="#594640"><svg:circle cx="53.9" cy="38.9" r="4.8"></svg:circle><svg:path d="M59.7 50.8c0 .9-.7 1.7-1.6 1.7h-4.8c-.9 0-1.7-.7-1.7-1.7c0-.9.7-1.7 1.7-1.7H58c.9 0 1.7.8 1.7 1.7"></svg:path></svg:g><svg:path fill="#d3976e" d="M35 42.6v1.2h1.7l4-3.9l-1.5-1.5zm14.1 0v1.2h1.6l4-3.9l-1.4-1.5z"></svg:path>`,
})
export class EmojioneRadioIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
