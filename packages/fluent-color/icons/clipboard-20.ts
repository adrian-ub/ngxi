import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClipboard20Icon],svg[fluent-color-clipboard-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClipboard202)" d="M4 4.506a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5z"></svg:path><svg:path fill="url(#fluentColorClipboard200)" fill-opacity=".7" d="M4 4.506a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5z"></svg:path><svg:path fill="url(#fluentColorClipboard201)" fill-opacity=".4" d="M4 4.506a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5z"></svg:path><svg:path fill="url(#fluentColorClipboard203)" d="M7 3.5A1.5 1.5 0 0 0 8.5 5h3a1.5 1.5 0 0 0 0-3h-3A1.5 1.5 0 0 0 7 3.5"></svg:path><svg:defs><svg:radialgradient id="fluentColorClipboard200" cx="0" cy="0" r="1" gradientTransform="matrix(0 5.14077 -4.64062 0 10 2.173)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset=".97" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorClipboard201" cx="0" cy="0" r="1" gradientTransform="matrix(0 2.30574 -3.67969 0 10 3.74)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset="1" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorClipboard202" x1="4" x2="16" y1="4.506" y2="18.006" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClipboard203" x1="10" x2="10" y1="2" y2="5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset="1" stop-color="#FAB500"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClipboard20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
