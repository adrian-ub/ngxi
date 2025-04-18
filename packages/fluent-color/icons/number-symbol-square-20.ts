import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorNumberSymbolSquare20Icon],svg[fluent-color-number-symbol-square-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorNumberSymbolSquare200)" d="M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3z"></svg:path><svg:path fill="url(#fluentColorNumberSymbolSquare201)" d="M9.105 6.011a.5.5 0 0 1 .384.594L9.19 8h2.477l.343-1.605a.5.5 0 0 1 .978.21L12.69 8h.811a.5.5 0 0 1 0 1h-1.025l-.428 2H13a.5.5 0 0 1 0 1h-1.167l-.344 1.604a.5.5 0 1 1-.978-.21L10.81 12H8.333l-.344 1.605a.5.5 0 1 1-.978-.21l.3-1.395H6.5a.5.5 0 0 1 0-1h1.024l.43-2H7a.5.5 0 0 1 0-1h1.167l.344-1.605a.5.5 0 0 1 .594-.384M8.547 11h2.477l.429-2H8.976z"></svg:path><svg:defs><svg:lineargradient id="fluentColorNumberSymbolSquare200" x1="6.413" x2="14.091" y1="3" y2="17" gradientUnits="userSpaceOnUse"><svg:stop offset=".028" stop-color="#E67EEA"></svg:stop><svg:stop offset=".438" stop-color="#AD64D7"></svg:stop><svg:stop offset="1" stop-color="#794DC5"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorNumberSymbolSquare201" x1="7.897" x2="13.961" y1="6.308" y2="16.773" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#F9DCFA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorNumberSymbolSquare20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
