import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClipboard24Icon],svg[fluent-color-clipboard-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClipboard242)" d="M4 6.25A2.25 2.25 0 0 1 6.25 4h11.5A2.25 2.25 0 0 1 20 6.25v13.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75z"></svg:path><svg:path fill="url(#fluentColorClipboard240)" fill-opacity=".7" d="M4 6.25A2.25 2.25 0 0 1 6.25 4h11.5A2.25 2.25 0 0 1 20 6.25v13.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75z"></svg:path><svg:path fill="url(#fluentColorClipboard241)" fill-opacity=".4" d="M4 6.25A2.25 2.25 0 0 1 6.25 4h11.5A2.25 2.25 0 0 1 20 6.25v13.5A2.25 2.25 0 0 1 17.75 22H6.25A2.25 2.25 0 0 1 4 19.75z"></svg:path><svg:path fill="url(#fluentColorClipboard243)" d="M8 4.25a2.25 2.25 0 0 0 2.25 2.25h3.5a2.25 2.25 0 0 0 0-4.5h-3.5A2.25 2.25 0 0 0 8 4.25"></svg:path><svg:defs><svg:radialgradient id="fluentColorClipboard240" cx="0" cy="0" r="1" gradientTransform="matrix(0 6.16892 -6.75 0 12 3)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset=".9" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorClipboard241" cx="0" cy="0" r="1" gradientTransform="matrix(0 2.79325 -4.95298 0 12 4.618)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset="1" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorClipboard242" x1="4" x2="18.146" y1="5.8" y2="23.483" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClipboard243" x1="12" x2="12" y1="2" y2="6.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset="1" stop-color="#FAB500"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClipboard24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
