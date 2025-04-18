import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClipboard16Icon],svg[fluent-color-clipboard-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClipboard162)" d="M3 3.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5z"></svg:path><svg:path fill="url(#fluentColorClipboard160)" fill-opacity=".7" d="M3 3.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5z"></svg:path><svg:path fill="url(#fluentColorClipboard161)" fill-opacity=".4" d="M3 3.5A1.5 1.5 0 0 1 4.5 2h7A1.5 1.5 0 0 1 13 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 13.5z"></svg:path><svg:path fill="url(#fluentColorClipboard163)" d="M5 2.5A1.5 1.5 0 0 0 6.5 4h3a1.5 1.5 0 0 0 0-3h-3A1.5 1.5 0 0 0 5 2.5"></svg:path><svg:defs><svg:radialgradient id="fluentColorClipboard160" cx="0" cy="0" r="1" gradientTransform="matrix(0 4.16204 -4.27976 0 8 1.278)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset="1" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorClipboard161" cx="0" cy="0" r="1" gradientTransform="matrix(0 2.02381 -4.04762 0 8 2.69)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset="1" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorClipboard162" x1="3" x2="13.44" y1="3.3" y2="14.593" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClipboard163" x1="8" x2="8" y1="1" y2="4" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset="1" stop-color="#FAB500"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClipboard16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
