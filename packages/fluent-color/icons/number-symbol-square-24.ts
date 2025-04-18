import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorNumberSymbolSquare24Icon],svg[fluent-color-number-symbol-square-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorNumberSymbolSquare240)" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3z"></svg:path><svg:path fill="url(#fluentColorNumberSymbolSquare241)" d="M10.898 7.515a.75.75 0 0 1 .588.882l-.22 1.103h2.47l.28-1.397a.75.75 0 0 1 1.47.294l-.22 1.103h.984a.75.75 0 0 1 0 1.5h-1.285l-.4 2h1.185a.75.75 0 0 1 0 1.5h-1.485l-.28 1.398a.75.75 0 0 1-1.47-.295l.22-1.103h-2.47l-.28 1.398a.75.75 0 0 1-1.47-.295l.22-1.103H7.75a.75.75 0 0 1 0-1.5h1.286l.4-2H8.25a.75.75 0 0 1 0-1.5h1.486l.28-1.397a.75.75 0 0 1 .882-.588M10.565 13h2.47l.4-2h-2.47z"></svg:path><svg:defs><svg:lineargradient id="fluentColorNumberSymbolSquare240" x1="7.389" x2="17.26" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop offset=".028" stop-color="#E67EEA"></svg:stop><svg:stop offset=".438" stop-color="#AD64D7"></svg:stop><svg:stop offset="1" stop-color="#794DC5"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorNumberSymbolSquare241" x1="9.371" x2="15.82" y1="7.846" y2="20.21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#F9DCFA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorNumberSymbolSquare24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
