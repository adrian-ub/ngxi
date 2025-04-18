import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneConvenienceStoreIcon],svg[emojione-convenience-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b2c1c0" d="M63 60H1c-.6 0-1 .5-1 1v2c0 .5.4 1 1 1h62c.5 0 1-.5 1-1v-2c0-.5-.5-1-1-1"></svg:path><svg:path fill="#e8e8e8" d="M51 28H13c-3.3 0-6 2.7-6 6v26h50V34c0-3.3-2.7-6-6-6"></svg:path><svg:path fill="#ffe62e" d="M33 0H13C9.7 0 7 2.7 7 6v18h32V6c0-3.3-2.7-6-6-6"></svg:path><svg:path fill="#b2c1c0" d="M29 24h4v4h-4zm-16 0h4v4h-4z"></svg:path><svg:path fill="#ff717f" d="M51 30H13c-2.2 0-4 1.8-4 4v8h46v-8c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="#ffe62e" d="M9 34h46v4H9z"></svg:path><svg:path fill="#ff717f" d="M33 0H13C9.7 0 7 2.7 7 6v18h32V6c0-3.3-2.7-6-6-6m4 22H9V6c0-2.2 1.8-4 4-4h20c2.2 0 4 1.8 4 4z"></svg:path><svg:path fill="#62727a" d="M24 42h16v18H24z"></svg:path><svg:path fill="#d6eef0" d="M26 44h12v16H26z"></svg:path><svg:path fill="#62727a" d="M31 44h2v16h-2zM9 45h15v2H9zm31 0h15v2H40z"></svg:path><svg:path fill="#d6eef0" d="M9 47h15v10H9zm31 0h15v10H40z"></svg:path><svg:g fill="#62727a"><svg:path d="M9 55h15v2H9zm31 0h15v2H40z"></svg:path><svg:path d="M9 45h2v12H9zm44 0h2v12h-2z"></svg:path></svg:g><svg:path fill="#ff717f" d="M30.7 4v6.4h-3.4V4H24v9.6h6.7V20H34V4zm-12 9.6q1.35 0 2.4-.9c.7-.6 1-1.4 1-2.3V7.2c0-.8-.3-1.6-1-2.3c-.7-.6-1.6-.9-2.4-.9H12v3.2h6.7v3.2h-3.3q-1.35 0-2.4.9c-1.05.9-1 1.4-1 2.3V20h10v-3.2h-6.7v-3.2z"></svg:path><svg:path fill="#e8e8e8" d="M40 64H24l2-4h12z"></svg:path>`,
})
export class EmojioneConvenienceStoreIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
