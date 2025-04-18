import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorComment24Icon],svg[fluent-color-comment-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorComment240)" d="M5.25 3A3.25 3.25 0 0 0 2 6.25v8.5A3.25 3.25 0 0 0 5.25 18H6v2.75c0 1.03 1.176 1.618 2 1L13 18h5.75A3.25 3.25 0 0 0 22 14.75v-8.5A3.25 3.25 0 0 0 18.75 3z"></svg:path><svg:defs><svg:radialgradient id="fluentColorComment240" cx="0" cy="0" r="1" gradientTransform="matrix(23.99056 26.74918 -48.51493 43.51162 -2.616 -2.846)" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FAB500"></svg:stop><svg:stop offset=".535" stop-color="#FE8401"></svg:stop><svg:stop offset="1" stop-color="#FB5937"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorComment24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
