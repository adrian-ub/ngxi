import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorDocument32Icon],svg[fluent-color-document-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorDocument320)" d="M17 2H8a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V12l-7-3z"></svg:path><svg:path fill="url(#fluentColorDocument322)" fill-opacity=".5" d="M17 2H8a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V12l-7-3z"></svg:path><svg:path fill="url(#fluentColorDocument321)" d="M17 10V2l10 10h-8a2 2 0 0 1-2-2"></svg:path><svg:defs><svg:lineargradient id="fluentColorDocument320" x1="20.4" x2="22.711" y1="2" y2="25.61" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6CE0FF"></svg:stop><svg:stop offset="1" stop-color="#4894FE"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorDocument321" x1="21.983" x2="19.483" y1="6.167" y2="10.333" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9FF0F9"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient><svg:radialgradient id="fluentColorDocument322" cx="0" cy="0" r="1" gradientTransform="rotate(133.108 13.335 7.491)scale(17.438 10.2853)" gradientUnits="userSpaceOnUse"><svg:stop offset=".362" stop-color="#4A43CB"></svg:stop><svg:stop offset="1" stop-color="#4A43CB" stop-opacity="0"></svg:stop></svg:radialgradient></svg:defs></svg:g>`,
})
export class FluentColorDocument32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
