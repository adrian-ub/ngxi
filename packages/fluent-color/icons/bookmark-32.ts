import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBookmark32Icon],svg[fluent-color-bookmark-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBookmark320)" d="M10.2 3A4.2 4.2 0 0 0 6 7.2V28a1 1 0 0 0 1.585.81L16 22.735l8.415 6.077A1 1 0 0 0 26 28V7.2A4.2 4.2 0 0 0 21.8 3z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBookmark320" x1="6" x2="19.973" y1="5.205" y2="23.42" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBookmark32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
