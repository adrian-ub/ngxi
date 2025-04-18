import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneKickScooterIcon],svg[emojione-kick-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#3e4347"><svg:ellipse cx="9.5" cy="7" rx="2.3" ry="4"></svg:ellipse><svg:path d="M2.9 5h4.7v4H2.9z"></svg:path><svg:ellipse cx="2.9" cy="7" rx=".9" ry="2"></svg:ellipse></svg:g><svg:ellipse cx="9.5" cy="7" fill="#83bf4f" rx=".9" ry="2"></svg:ellipse><svg:ellipse cx="55.4" cy="54" fill="#3e4347" rx="6.6" ry="7"></svg:ellipse><svg:path fill="#83bf4f" d="M9.5 5h13.1v4H9.5z"></svg:path><svg:g fill="#3e4347"><svg:ellipse cx="21.7" cy="7" rx="2.3" ry="4"></svg:ellipse><svg:path d="M22.6 5h6.6v4h-6.6z"></svg:path></svg:g><svg:ellipse cx="29.2" cy="7" fill="#94989b" rx="1.4" ry="2"></svg:ellipse><svg:path fill="#83bf4f" d="M28.3 52s-1.7-8-9.4-8c-2.7 0-4.4-1.8-5.2-3.1c-.4-.7-1.7-2.9-1.7-2.9l-3.2 2l9 16h37.6v-4z"></svg:path><svg:path fill="#d0d0d0" d="M58.7 54c0 1.9-1.5 3.5-3.3 3.5s-3.3-1.6-3.3-3.5s1.5-3.5 3.3-3.5s3.3 1.6 3.3 3.5"></svg:path><svg:path fill="#83bf4f" d="M55.4 46.5c3.1 0 5.6-.5 5.6-1.1c-1.6-1.2-3.5-1.9-5.6-1.9c-5.4 0-9.8 4.7-9.8 10.5h2.8c0-4.1 3.2-7.5 7-7.5"></svg:path><svg:ellipse cx="55.4" cy="54" fill="#fff" rx="2.2" ry="2.3"></svg:ellipse><svg:path fill="#3e4347" d="M13.7 40.9C13.3 40.2 12 38 12 38l-1.4.9l-.6 3.5l2.9 5.2l1-6.1c0-.3-.1-.4-.2-.6" opacity=".5"></svg:path><svg:path fill="#c7e755" d="M57.8 44.8c0 .3-3.4-.7-6.7 1.4c-3.3 2-4.3 5.9-4.5 5.8c-.3.1.4-4.4 4-6.7c3.7-2.4 7.4-.8 7.2-.5"></svg:path><svg:g fill="#3e4347"><svg:path d="M6.6 47.2c.3-.1.6-.2.9-.2l.1-.8c.2-1.2.4-1.7 1.2-1.8s-1.5-.1-2.2 2.8" opacity=".5"></svg:path><svg:path d="M9.5 47H7.6c-2.6 0-4.7 3.1-4.7 7s2.1 7 4.7 7h1.9c2.6 0 4.7-3.1 4.7-7s-2.1-7-4.7-7"></svg:path></svg:g><svg:path fill="#d0d0d0" d="M11.8 54c0 1.9-1 3.5-2.3 3.5S7.2 55.9 7.2 54s1-3.5 2.3-3.5s2.3 1.6 2.3 3.5"></svg:path><svg:ellipse cx="9.5" cy="54" fill="#fff" rx="1.6" ry="2.3"></svg:ellipse><svg:path fill="#fff" d="M5 54c0 3.9 2.7 6.3 2.8 6c.2-.2-2-2.5-1.9-6c-.1-3.5 2.1-5.8 1.9-6c-.1-.3-2.8 2.1-2.8 6" opacity=".25"></svg:path><svg:path fill="#83bf4f" d="m11.4 42.1l6-37.1h-3.8L7.8 41.6c-1.4.6-2.2 2.1-2.5 4.1l-.5 2.8c.7-.9 1.7-1.5 2.7-1.5l.1-.8c.2-1.4.5-2 1.8-1.7c.5.1.5 1.2.2 2.6l-1.1 6.5c-.1.7.3 1.4 1 1.5s1.3-.4 1.4-1.1l1.1-6.5c.6-2.2.7-4.4-.6-5.4"></svg:path><svg:g fill="#c7e755"><svg:path d="M9.9 43.6c.8-.3 1.6.8.9 4.5s-.9 2.7-.3-1.8c.4-2.7-1.1-2.5-.6-2.7m1.9-18C10.3 34.5 9 41.7 8.7 41.7c-.2 0 .8-7.3 2.3-16.2s2.8-16.1 3.1-16.1c.2 0-.9 7.3-2.3 16.2"></svg:path><svg:ellipse cx="14.2" cy="6.2" rx="4.7" ry=".5"></svg:ellipse></svg:g>`,
})
export class EmojioneKickScooterIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
