import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorBookmark20Icon],svg[fluent-color-bookmark-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorBookmark200)" d="M4 4.5A2.5 2.5 0 0 1 6.5 2h7A2.5 2.5 0 0 1 16 4.5v13a.5.5 0 0 1-.794.404L10 14.118l-5.206 3.786A.5.5 0 0 1 4 17.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorBookmark200" x1="4" x2="12.653" y1="3.357" y2="14.354" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorBookmark20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
