import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorFlag28Icon],svg[fluent-color-flag-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorFlag280)" d="M4.75 25a.75.75 0 0 1-.75-.75V16.5h1.5v7.75a.75.75 0 0 1-.75.75"></svg:path><svg:path fill="url(#fluentColorFlag281)" d="M23.25 18H4.5a.5.5 0 0 1-.5-.5V3.75A.75.75 0 0 1 4.75 3h18.5c.59 0 .95.65.635 1.15l-3.999 6.35l3.999 6.35A.75.75 0 0 1 23.25 18"></svg:path><svg:defs><svg:lineargradient id="fluentColorFlag280" x1="5.5" x2="4.764" y1="27.732" y2="16.82" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#889096"></svg:stop><svg:stop offset="1" stop-color="#63686E"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorFlag281" x1="-.375" x2="7.906" y1="-1.286" y2="18.982" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F97DBD"></svg:stop><svg:stop offset="1" stop-color="#D7257D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorFlag28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
