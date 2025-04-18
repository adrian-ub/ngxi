import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorReceipt20Icon],svg[fluent-color-receipt-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorReceipt200)" d="M5 3a2 2 0 0 0-2 2v9a3 3 0 0 0 3 3h8V5a2 2 0 0 0-2-2z"></svg:path><svg:path fill="url(#fluentColorReceipt201)" d="M6 6.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="url(#fluentColorReceipt202)" d="M6 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="url(#fluentColorReceipt203)" d="M6 12.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="url(#fluentColorReceipt204)" d="M14 12h3v2a3 3 0 0 1-3 3z"></svg:path><svg:defs><svg:lineargradient id="fluentColorReceipt200" x1="5" x2="9.5" y1="3.5" y2="17" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset=".645" stop-color="#FFB357"></svg:stop><svg:stop offset="1" stop-color="#FF921F"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReceipt201" x1="5" x2="12" y1="6" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#CA6407"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReceipt202" x1="5" x2="12" y1="6" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#CA6407"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReceipt203" x1="5" x2="12" y1="6" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF921F"></svg:stop><svg:stop offset="1" stop-color="#CA6407"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorReceipt204" x1="17" x2="14.087" y1="14" y2="14.504" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#CA6407"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorReceipt20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
