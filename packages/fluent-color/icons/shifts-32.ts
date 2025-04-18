import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorShifts32Icon],svg[fluent-color-shifts-32-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorShifts320)" d="M9 4a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5z"></svg:path><svg:path fill="url(#fluentColorShifts321)" d="M15.006 8a1 1 0 0 1 1 1v7h5a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1"></svg:path><svg:defs><svg:lineargradient id="fluentColorShifts320" x1="8" x2="20" y1="2.667" y2="29.333" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorShifts321" x1="13.881" x2="10.932" y1="8.75" y2="18.651" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#DEDEFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorShifts32Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
