import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneWatchIcon],svg[emojione-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#e8e8e8" d="M18 46h26v16H18z"></svg:path><svg:path fill="#62727a" d="M24 50h14v3H24zm0 8h14v3H24z"></svg:path><svg:path fill="#fff" d="M24 55h14v3H24z"></svg:path><svg:path fill="#62727a" d="M39 54h4v2h-4z"></svg:path><svg:path fill="#fff" d="M39 52h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M39 49h4v2h-4z"></svg:path><svg:path fill="#fff" d="M39 47h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M39 59h4v2h-4z"></svg:path><svg:path fill="#fff" d="M39 57h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M19 54h4v2h-4z"></svg:path><svg:path fill="#fff" d="M19 52h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M19 49h4v2h-4z"></svg:path><svg:path fill="#fff" d="M19 47h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M19 59h4v2h-4z"></svg:path><svg:path fill="#fff" d="M19 57h4v2h-4z"></svg:path><svg:path fill="#e8e8e8" d="M18 2h26v16H18z"></svg:path><svg:path fill="#62727a" d="M24 6h14v3H24z"></svg:path><svg:path fill="#fff" d="M24 3h14v3H24zm0 8h14v3H24z"></svg:path><svg:path fill="#62727a" d="M39 10h4v2h-4z"></svg:path><svg:path fill="#fff" d="M39 8h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M39 5h4v2h-4z"></svg:path><svg:path fill="#fff" d="M39 3h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M39 15h4v2h-4z"></svg:path><svg:path fill="#fff" d="M39 13h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M19 10h4v2h-4z"></svg:path><svg:path fill="#fff" d="M19 8h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M19 5h4v2h-4z"></svg:path><svg:path fill="#fff" d="M19 3h4v2h-4z"></svg:path><svg:path fill="#62727a" d="M19 15h4v2h-4z"></svg:path><svg:path fill="#fff" d="M19 13h4v2h-4z"></svg:path><svg:path fill="#e8e8e8" d="M52 28h-3v8h3c.6 0 1-.4 1-1v-6c0-.5-.5-1-1-1"></svg:path><svg:g fill="#62727a"><svg:path d="M49 29.5h4v1h-4zm0 2h4v1h-4zm0 2h4v1h-4z"></svg:path><svg:circle cx="31" cy="32" r="20"></svg:circle></svg:g><svg:circle cx="31" cy="32" r="17.1" fill="#3e4347"></svg:circle><svg:g fill="#e8e8e8"><svg:circle cx="31" cy="32" r="1.9"></svg:circle><svg:path d="m32 24.3l-.5-1.8v-2.9c0-3.6-1-3.6-1 0v2.9l-.5 1.8v5.8c0 1.5 1.9 1.5 1.9 0z"></svg:path><svg:path d="m29.638 32.367l.95-1.645l8.226 4.752l-.95 1.645z"></svg:path></svg:g><svg:circle cx="31" cy="32" r="1" fill="#62727a"></svg:circle><svg:g fill="#fff"><svg:circle cx="31" cy="14.9" r="1"></svg:circle><svg:circle cx="22.4" cy="17.2" r="1"></svg:circle><svg:circle cx="16.2" cy="23.4" r="1"></svg:circle><svg:circle cx="13.9" cy="32" r="1"></svg:circle><svg:circle cx="16.2" cy="40.6" r="1"></svg:circle><svg:path d="M21.6 46.4c.3-.5.8-.6 1.3-.3s.6.8.4 1.3c-.3.5-.8.6-1.3.3s-.7-.9-.4-1.3m8.4 2.7c0-.5.4-1 1-1s1 .4 1 1c0 .5-.4 1-1 1c-.5 0-1-.4-1-1"></svg:path><svg:circle cx="39.6" cy="46.8" r="1"></svg:circle><svg:path d="M45.4 41.4c-.5-.3-.6-.8-.3-1.3s.8-.6 1.3-.3s.6.8.3 1.3c-.3.4-.9.6-1.3.3m2.7-8.4c-.5 0-1-.4-1-1s.4-1 1-1c.5 0 1 .4 1 1c0 .5-.4 1-1 1"></svg:path><svg:circle cx="45.8" cy="23.4" r="1"></svg:circle><svg:circle cx="39.6" cy="17.2" r="1"></svg:circle></svg:g>`,
})
export class EmojioneWatchIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
