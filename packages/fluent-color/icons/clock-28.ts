import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClock28Icon],svg[fluent-color-clock-28-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClock280)" d="M14 2C7.373 2 2 7.373 2 14s5.373 12 12 12s12-5.373 12-12S20.627 2 14 2"></svg:path><svg:path fill="url(#fluentColorClock281)" d="M13.993 7.648a.75.75 0 0 0-1.493.102v7l.007.102a.75.75 0 0 0 .743.648h5l.102-.007A.75.75 0 0 0 18.25 14H14V7.75z"></svg:path><svg:defs><svg:lineargradient id="fluentColorClock280" x1="6" x2="18" y1=".667" y2="27.333" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClock281" x1="13.069" x2="10.909" y1="8.301" y2="15.094" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClock28Icon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
