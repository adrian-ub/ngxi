import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorImageOff32Icon],svg[fluent-color-image-off-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorImageOff324)" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5z"></svg:path><svg:path fill="url(#fluentColorImageOff320)" d="M28.356 26.82A4.5 4.5 0 0 1 24.5 29h-17a4.5 4.5 0 0 1-3.856-2.18l10.588-10.588a2.5 2.5 0 0 1 3.536 0z"></svg:path><svg:path fill="url(#fluentColorImageOff321)" d="M19 11a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path><svg:path fill="url(#fluentColorImageOff322)" d="M3 7.5A4.5 4.5 0 0 1 7.5 3h17A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5z"></svg:path><svg:path fill="url(#fluentColorImageOff323)" d="M2.366 2.366a1.25 1.25 0 0 1 1.768 0l25.5 25.5a1.25 1.25 0 0 1-1.768 1.768l-25.5-25.5a1.25 1.25 0 0 1 0-1.768"></svg:path><svg:defs><svg:lineargradient id="fluentColorImageOff320" x1="12.469" x2="15.605" y1="15.5" y2="29.673" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E7DEDE"></svg:stop><svg:stop offset="1" stop-color="#D3D3D3"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImageOff321" x1="20.8" x2="22.992" y1="7.333" y2="15.225" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#E4E4E4"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImageOff322" x1="29" x2="3" y1="3" y2="29" gradientUnits="userSpaceOnUse"><svg:stop offset=".464" stop-opacity="0"></svg:stop><svg:stop offset=".484"></svg:stop><svg:stop offset=".573" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorImageOff323" x1="2" x2="24.75" y1="-3.25" y2="30.875" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E82C41"></svg:stop><svg:stop offset="1" stop-color="#AA1D2D"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorImageOff324" cx="0" cy="0" r="1" gradientTransform="matrix(44.57142 56.41068 -51.30938 40.54076 -7.214 -11.625)" gradientUnits="userSpaceOnUse"><svg:stop offset=".338" stop-color="#A9A9A9"></svg:stop><svg:stop offset=".695" stop-color="#898989"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorImageOff32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
