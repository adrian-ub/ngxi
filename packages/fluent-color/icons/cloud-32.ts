import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCloud32Icon],svg[fluent-color-cloud-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCloud320)" d="M2 19a6 6 0 0 0 6 6h16a6 6 0 1 0-.062-12a8.001 8.001 0 0 0-15.876 0H8a6 6 0 0 0-6 6"></svg:path><svg:path fill="url(#fluentColorCloud321)" fill-opacity=".3" d="M14 19a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path><svg:path fill="url(#fluentColorCloud322)" fill-opacity=".3" d="M16 22a8 8 0 1 0-7.938-9a6 6 0 0 1 5.359 8.575A8 8 0 0 0 16 22"></svg:path><svg:path fill="url(#fluentColorCloud323)" d="M16 22a8 8 0 1 0-7.938-9a6 6 0 0 1 5.359 8.575A8 8 0 0 0 16 22"></svg:path><svg:path fill="url(#fluentColorCloud324)" fill-opacity=".5" d="M2 19a6 6 0 0 0 6 6h16a6 6 0 1 0-.062-12a8.001 8.001 0 0 0-15.876 0H8a6 6 0 0 0-6 6"></svg:path><svg:defs><svg:lineargradient id="fluentColorCloud320" x1="3" x2="15.015" y1="9.563" y2="27.959" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#367AF2"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCloud321" x1="2" x2="10.09" y1="15.056" y2="22.215" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#FCFCFC" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCloud322" x1="10.825" x2="12.942" y1="6.9" y2="17.931" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#FCFCFC" stop-opacity="0"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorCloud323" cx="0" cy="0" r="1" gradientTransform="matrix(8.98356 -3.8 3.39718 8.03127 8.686 19.1)" gradientUnits="userSpaceOnUse"><svg:stop offset=".412" stop-color="#2C87F5"></svg:stop><svg:stop offset="1" stop-color="#2C87F5" stop-opacity="0"></svg:stop></svg:radialgradient><svg:radialgradient id="fluentColorCloud324" cx="0" cy="0" r="1" gradientTransform="matrix(10.79167 21.05115 -154.80576 79.35965 14.833 4.813)" gradientUnits="userSpaceOnUse"><svg:stop offset=".5" stop-color="#DD3CE2" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#DD3CE2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorCloud32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
