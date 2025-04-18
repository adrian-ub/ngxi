import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorImage48Icon],svg[fluent-color-image-48-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorImage482)" d="M6 12.25A6.25 6.25 0 0 1 12.25 6h23.5A6.25 6.25 0 0 1 42 12.25v23.5A6.25 6.25 0 0 1 35.75 42h-23.5A6.25 6.25 0 0 1 6 35.75z"></svg:path><svg:path fill="url(#fluentColorImage480)" d="m40.835 39.385l-14.36-14.36a3.5 3.5 0 0 0-4.95 0l-14.36 14.36A6.24 6.24 0 0 0 12.25 42h23.5a6.24 6.24 0 0 0 5.085-2.615"></svg:path><svg:path fill="url(#fluentColorImage481)" d="M27 17a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorImage480" x1="19.19" x2="23.289" y1="24" y2="42.935" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImage481" x1="29.4" x2="32.323" y1="12.111" y2="22.633" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorImage482" cx="0" cy="0" r="1" gradientTransform="matrix(61.71419 78.10727 -71.04382 56.1332 -8.142 -14.25)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorImage48Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
