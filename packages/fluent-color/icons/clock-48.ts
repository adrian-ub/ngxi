import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClock48Icon],svg[fluent-color-clock-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClock480)" d="M24 5c10.493 0 19 8.507 19 19s-8.507 19-19 19S5 34.493 5 24S13.507 5 24 5"></svg:path><svg:path fill="url(#fluentColorClock481)" d="M22.75 12c.647 0 1.18.492 1.244 1.122l.006.128V24h6.75a1.25 1.25 0 0 1 .128 2.494l-.128.006h-8a1.25 1.25 0 0 1-1.244-1.122l-.006-.128v-12c0-.69.56-1.25 1.25-1.25"></svg:path><svg:defs><svg:lineargradient id="fluentColorClock480" x1="11.333" x2="30.333" y1="2.889" y2="45.111" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClock481" x1="22.419" x2="18.569" y1="14.219" y2="25.686" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClock48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
