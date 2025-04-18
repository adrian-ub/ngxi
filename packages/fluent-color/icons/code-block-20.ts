import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCodeBlock20Icon],svg[fluent-color-code-block-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCodeBlock200)" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path fill="url(#fluentColorCodeBlock201)" d="M8.854 7.854L6.707 10l2.147 2.146a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 1 1 .708.708m3-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L13.293 10l-2.147-2.146a.5.5 0 0 1 .708-.708"></svg:path><svg:defs><svg:lineargradient id="fluentColorCodeBlock200" x1="6.413" x2="14.091" y1="3" y2="17" gradientUnits="userSpaceOnUse"><svg:stop offset=".028" stop-color="#E67EEA"></svg:stop><svg:stop offset=".438" stop-color="#AD64D7"></svg:stop><svg:stop offset="1" stop-color="#794DC5"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCodeBlock201" x1="7.634" x2="11.158" y1="7.231" y2="16.354" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#F9DCFA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCodeBlock20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
