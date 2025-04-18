import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorImage32Icon],svg[fluent-color-image-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorImage322)" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5z"></svg:path><svg:path fill="url(#fluentColorImage320)" d="M28.356 26.82A4.5 4.5 0 0 1 24.5 29h-17a4.5 4.5 0 0 1-3.856-2.18l10.588-10.588a2.5 2.5 0 0 1 3.536 0z"></svg:path><svg:path fill="url(#fluentColorImage321)" d="M19 11a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:defs><svg:lineargradient id="fluentColorImage320" x1="12.469" x2="15.605" y1="15.5" y2="29.673" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImage321" x1="20.8" x2="22.992" y1="7.333" y2="15.225" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorImage322" cx="0" cy="0" r="1" gradientTransform="matrix(44.57142 56.41068 -51.30938 40.54076 -7.214 -11.625)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#0FAFFF"></svg:stop><svg:stop offset=".529" stop-color="#367AF2"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorImage32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
