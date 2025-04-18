import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClipboard48Icon],svg[fluent-color-clipboard-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClipboard482)" d="M8 11.5A4.5 4.5 0 0 1 12.5 7h23a4.5 4.5 0 0 1 4.5 4.5v28a4.5 4.5 0 0 1-4.5 4.5h-23A4.5 4.5 0 0 1 8 39.5z"></svg:path><svg:path fill="url(#fluentColorClipboard480)" fill-opacity=".7" d="M8 11.5A4.5 4.5 0 0 1 12.5 7h23a4.5 4.5 0 0 1 4.5 4.5v28a4.5 4.5 0 0 1-4.5 4.5h-23A4.5 4.5 0 0 1 8 39.5z"></svg:path><svg:path fill="url(#fluentColorClipboard481)" fill-opacity=".4" d="M8 11.5A4.5 4.5 0 0 1 12.5 7h23a4.5 4.5 0 0 1 4.5 4.5v28a4.5 4.5 0 0 1-4.5 4.5h-23A4.5 4.5 0 0 1 8 39.5z"></svg:path><svg:path fill="url(#fluentColorClipboard483)" d="M16 8.25A4.25 4.25 0 0 1 20.25 4h7.5a4.25 4.25 0 0 1 0 8.5h-7.5A4.25 4.25 0 0 1 16 8.25"></svg:path><svg:defs><svg:radialgradient id="fluentColorClipboard480" cx="0" cy="0" r="1" gradientTransform="matrix(0 12.6806 -12.375 0 24 4.944)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset=".97" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorClipboard481" cx="0" cy="0" r="1" gradientTransform="matrix(0 5.6875 -9.8125 0 24 8.813)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0A1852"></svg:stop><svg:stop offset="1" stop-color="#0A1852" stop-opacity="0"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorClipboard482" x1="8" x2="37.243" y1="10.7" y2="46.266" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0094F0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClipboard483" x1="24" x2="24" y1="4" y2="12.5" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFE06B"></svg:stop><svg:stop offset="1" stop-color="#FAB500"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClipboard48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
