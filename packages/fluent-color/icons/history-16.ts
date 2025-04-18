import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorHistory16Icon],svg[fluent-color-history-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorHistory160)" d="M7.698 5a.75.75 0 0 1 .75.75V7.5h1.25a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="url(#fluentColorHistory161)" d="M7.947 3.5a4.5 4.5 0 1 1-4.454 5.14a.75.75 0 1 0-1.485.212a6.001 6.001 0 1 0 1.94-5.324V2.75a.75.75 0 1 0-1.5 0v3c0 .414.335.75.75.75h2.5a.75.75 0 1 0 0-1.5H4.592a4.5 4.5 0 0 1 3.354-1.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorHistory160" x1="6.357" x2="14.586" y1="12.633" y2="8.988" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D373FC"></svg:stop><svg:stop offset="1" stop-color="#6D37CD"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorHistory161" x1="2" x2="5.234" y1="2.706" y2="16.186" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#0067BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorHistory16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
