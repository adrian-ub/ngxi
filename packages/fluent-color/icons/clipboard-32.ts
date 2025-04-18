import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClipboard32Icon],svg[fluent-color-clipboard-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClipboard322)" d="M5 7.5A3.5 3.5 0 0 1 8.5 4h15A3.5 3.5 0 0 1 27 7.5v19a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5z"></svg:path><svg:path fill="url(#fluentColorClipboard320)" fill-opacity=".7" d="M5 7.5A3.5 3.5 0 0 1 8.5 4h15A3.5 3.5 0 0 1 27 7.5v19a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5z"></svg:path><svg:path fill="url(#fluentColorClipboard321)" fill-opacity=".4" d="M5 7.5A3.5 3.5 0 0 1 8.5 4h15A3.5 3.5 0 0 1 27 7.5v19a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5z"></svg:path><svg:path fill="url(#fluentColorClipboard323)" d="M10 5a3 3 0 0 1 3-3h6a3 3 0 1 1 0 6h-6a3 3 0 0 1-3-3"></svg:path><svg:defs><svg:radialgradient id="fluentColorClipboard320" cx="0" cy="0" r="1" gradientTransform="matrix(0 8.91066 -8.50781 0 16 2.556)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset=".97" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorClipboard321" cx="0" cy="0" r="1" gradientTransform="matrix(0 3.99662 -6.74609 0 16 5.274)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset="1" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorClipboard322" x1="5" x2="25.632" y1="6.6" y2="31.15" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClipboard323" x1="16" x2="16" y1="2" y2="8" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset="1" stop-color="#FAB500"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClipboard32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
