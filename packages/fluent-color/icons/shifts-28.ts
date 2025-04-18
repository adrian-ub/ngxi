import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShifts28Icon],svg[fluent-color-shifts-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#212121" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v15.5A3.25 3.25 0 0 0 6.25 25h15.5A3.25 3.25 0 0 0 25 21.75V6.25A3.25 3.25 0 0 0 21.75 3z"></svg:path><svg:path fill="url(#fluentColorShifts280)" d="M6.25 3A3.25 3.25 0 0 0 3 6.25v15.5A3.25 3.25 0 0 0 6.25 25h15.5A3.25 3.25 0 0 0 25 21.75V6.25A3.25 3.25 0 0 0 21.75 3z"></svg:path><svg:path fill="#D9D9D9" d="M14.5 7.75a.75.75 0 0 0-1.5 0v7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5H14.5z"></svg:path><svg:path fill="url(#fluentColorShifts281)" d="M14.5 7.75a.75.75 0 0 0-1.5 0v7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5H14.5z"></svg:path><svg:defs><svg:lineargradient id="fluentColorShifts280" x1="6.667" x2="17.667" y1="1.778" y2="26.222" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorShifts281" x1="12.891" x2="10.444" y1="7.638" y2="16.092" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#DEDEFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorShifts28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
