import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShifts20Icon],svg[fluent-color-shifts-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShifts200)" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"></svg:path><svg:path fill="url(#fluentColorShifts201)" fill-rule="evenodd" d="M9.5 6a.5.5 0 0 1 .5.5V10h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="fluentColorShifts200" x1="5.333" x2="12.333" y1="2.222" y2="17.778" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorShifts201" x1="8.938" x2="7.463" y1="6.375" y2="11.326" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#DEDEFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorShifts20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
