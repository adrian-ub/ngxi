import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFuneralUrnIcon],svg[fluent-emoji-funeral-urn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#f591id0)" d="M16 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7"></svg:path><svg:path fill="url(#f591id1)" d="M4 14c0-7 4-7 4-7h16s4 0 4 7c0 6.538-3.167 12.021-4.899 14.531c-.663.961-1.773 1.469-2.94 1.469H11.84c-1.168 0-2.278-.508-2.941-1.469C7.167 26.021 4 20.538 4 14"></svg:path><svg:path fill="url(#f591id2)" fill-rule="evenodd" d="M27.97 13a12 12 0 0 0-.278-2H4.308a12 12 0 0 0-.279 2zM4.026 15q.051 1.021.192 2h23.566c.093-.652.16-1.32.192-2z" clip-rule="evenodd"></svg:path><svg:defs><svg:radialgradient id="f591id0" cx="0" cy="0" r="1" gradientTransform="matrix(-3 6 -12 -5.99999 18 3.5)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F3AD61"></svg:stop><svg:stop offset="1" stop-color="#A56953"></svg:stop></svg:radialgradient><svg:radialgradient id="f591id1" cx="0" cy="0" r="1" gradientTransform="matrix(-5.92854 16.57143 -20.23768 -7.24016 19.429 11.929)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F3AD61"></svg:stop><svg:stop offset="1" stop-color="#A56953"></svg:stop></svg:radialgradient><svg:lineargradient id="f591id2" x1="3.5" x2="22.5" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7D4533"></svg:stop><svg:stop offset="1" stop-color="#A56953"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentEmojiFuneralUrnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
