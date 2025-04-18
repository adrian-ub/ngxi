import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPoll24Icon],svg[fluent-color-poll-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPoll240)" d="M11.752 2a2.75 2.75 0 0 1 2.752 2.752V19.25a2.752 2.752 0 1 1-5.504 0V4.752A2.75 2.75 0 0 1 11.752 2"></svg:path><svg:path fill="url(#fluentColorPoll241)" d="M21.504 9.752a2.752 2.752 0 1 0-5.504 0v9.498a2.752 2.752 0 0 0 5.504 0z"></svg:path><svg:path fill="url(#fluentColorPoll242)" d="M7.504 14.752a2.752 2.752 0 0 0-5.504 0v4.498a2.752 2.752 0 0 0 5.504 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorPoll240" x1="14.045" x2="10.882" y1="18.335" y2="1.834" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPoll241" x1="21.045" x2="19.238" y1="19.252" y2="6.681" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPoll242" x1="2.688" x2="12.665" y1="12.417" y2="18.911" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPoll24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
