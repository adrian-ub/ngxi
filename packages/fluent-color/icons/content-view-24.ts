import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorContentView24Icon],svg[fluent-color-content-view-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorContentView240)" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75z"></svg:path><svg:path fill="url(#fluentColorContentView241)" d="M6 8.25c0-.966.784-1.75 1.75-1.75h8.5c.966 0 1.75.784 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-8.5A1.75 1.75 0 0 1 6 9.75zM6.75 13a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM6 16.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M15.25 13a1.75 1.75 0 0 0-1.75 1.75v1c0 .966.784 1.75 1.75 1.75h1A1.75 1.75 0 0 0 18 15.75v-1A1.75 1.75 0 0 0 16.25 13z"></svg:path><svg:defs><svg:lineargradient id="fluentColorContentView240" x1="9.429" x2="16.325" y1="3" y2="20.03" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorContentView241" x1="6" x2="20.135" y1="6.5" y2="11.741" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorContentView24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
