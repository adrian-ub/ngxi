import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBookmark24Icon],svg[fluent-color-bookmark-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBookmark240)" d="M6.19 21.854a.75.75 0 0 1-1.188-.609V6.25A3.25 3.25 0 0 1 8.252 3h7.499A3.25 3.25 0 0 1 19 6.25v14.996a.75.75 0 0 1-1.188.609l-5.811-4.181z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBookmark240" x1="5.002" x2="15.317" y1="4.611" y2="17.491" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBookmark24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
