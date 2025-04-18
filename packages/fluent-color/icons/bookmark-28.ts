import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBookmark28Icon],svg[fluent-color-bookmark-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBookmark280)" d="M9.25 3.5A3.25 3.25 0 0 0 6 6.75v18a.75.75 0 0 0 1.203.598L14 20.19l6.797 5.157A.75.75 0 0 0 22 24.75v-18a3.25 3.25 0 0 0-3.25-3.25z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBookmark280" x1="6" x2="17.978" y1="5.366" y2="20.129" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBookmark28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
