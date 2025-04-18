import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneKitchenKnifeIcon],svg[emojione-kitchen-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d6dfe3" d="M30.6 24.3S54.6 46.2 62 62c0 0-20.1.6-43.3-22.5c0 0 7.6-8.1 6.1-9.6z"></svg:path><svg:path fill="#aebabf" d="M20.9 37c-1.2 1.4-2.2 2.5-2.2 2.5C41.9 62.6 62 62 62 62c-.5-1-1-2-1.6-3.1c-6.7-.9-22.2-4.8-39.5-21.9"></svg:path><svg:path fill="#333" d="M30.8 23.5L9.2 2l-7 6.9s-.5.5-.1.9c.9.9 1.5.5 2.4.7c1.1.3 2.4 1.5 2.4 1.5l18 17.9l5.9-5.9c.2-.1.2-.3 0-.5"></svg:path><svg:path fill="#d0d0d0" d="M9.1 8.1c-.3.3-.9.3-1.2 0s-.3-.9 0-1.2s.9-.3 1.2 0s.3.8 0 1.2"></svg:path>`,
})
export class EmojioneKitchenKnifeIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
