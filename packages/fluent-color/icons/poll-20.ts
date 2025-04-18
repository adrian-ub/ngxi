import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorPoll20Icon],svg[fluent-color-poll-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorPoll200)" d="M8 4a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0z"></svg:path><svg:path fill="url(#fluentColorPoll201)" d="M14 8a2 2 0 1 1 4 0v8a2 2 0 1 1-4 0z"></svg:path><svg:path fill="url(#fluentColorPoll202)" d="M2 12a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0z"></svg:path><svg:defs><svg:lineargradient id="fluentColorPoll200" x1="11.667" x2="8.903" y1="15.067" y2="1.966" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#6D37CD"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPoll201" x1="17.667" x2="16.082" y1="15.8" y2="5.788" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E23CB4"></svg:stop><svg:stop offset="1" stop-color="#EA71EF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorPoll202" x1="2.5" x2="10.148" y1="10.333" y2="14.857" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#0078D4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorPoll20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
