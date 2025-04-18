import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorForm28Icon],svg[fluent-color-form-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorForm280)" d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3z"></svg:path><svg:path fill="url(#fluentColorForm281)" d="M6 12.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M8.5 17a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m4.5-4.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m.75 6.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM6 7.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 7.25"></svg:path><svg:defs><svg:lineargradient id="fluentColorForm280" x1="10.857" x2="19.286" y1="3" y2="23.814" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#B3E0FF"></svg:stop><svg:stop offset="1" stop-color="#8CD0FF"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorForm281" x1="5.2" x2="24.614" y1="5.725" y2="9.282" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0094F0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorForm28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
