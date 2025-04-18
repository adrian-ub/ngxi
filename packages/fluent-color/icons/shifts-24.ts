import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShifts24Icon],svg[fluent-color-shifts-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShifts240)" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3z"></svg:path><svg:path fill="url(#fluentColorShifts241)" d="M11.75 6a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h4.498a.75.75 0 0 0 0-1.5H12.5V6.75a.75.75 0 0 0-.75-.75"></svg:path><svg:defs><svg:lineargradient id="fluentColorShifts240" x1="6" x2="15" y1="2" y2="22" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorShifts241" x1="10.906" x2="8.694" y1="6.563" y2="13.988" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#DEDEFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorShifts24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
