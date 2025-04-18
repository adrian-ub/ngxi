import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCodeBlock24Icon],svg[fluent-color-code-block-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCodeBlock240)" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75z"></svg:path><svg:path fill="url(#fluentColorCodeBlock241)" d="M10.53 9.28L7.81 12l2.72 2.72a.75.75 0 1 1-1.06 1.06l-3.25-3.25a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 1 1 1.06 1.06m4-1.06l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 1 1-1.06-1.06L16.19 12l-2.72-2.72a.75.75 0 0 1 1.06-1.06"></svg:path><svg:defs><svg:lineargradient id="fluentColorCodeBlock240" x1="7.389" x2="17.26" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop offset=".028" stop-color="#E67EEA"></svg:stop><svg:stop offset=".438" stop-color="#AD64D7"></svg:stop><svg:stop offset="1" stop-color="#794DC5"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCodeBlock241" x1="8.845" x2="13.544" y1="8.308" y2="20.472" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#F9DCFA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCodeBlock24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
