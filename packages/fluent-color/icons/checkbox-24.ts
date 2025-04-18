import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorCheckbox24Icon],svg[fluent-color-checkbox-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorCheckbox240)" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3z"></svg:path><svg:path fill="url(#fluentColorCheckbox241)" d="m17.28 9.28l-6.754 6.747a.75.75 0 0 1-1.06 0L6.72 13.28a.75.75 0 0 1 1.06-1.06l2.217 2.216l6.223-6.217a.75.75 0 1 1 1.06 1.062"></svg:path><svg:defs><svg:lineargradient id="fluentColorCheckbox240" x1="3.643" x2="16.065" y1="6.375" y2="19.281" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#36DFF1"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorCheckbox241" x1="8.616" x2="13.467" y1="8.634" y2="24.313" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset="1" stop-color="#B3E0FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorCheckbox24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
