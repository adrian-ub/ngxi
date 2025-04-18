import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClock16Icon],svg[fluent-color-clock-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClock160)" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2"></svg:path><svg:path fill="url(#fluentColorClock161)" d="M7.501 5a.5.5 0 0 1 .492.41l.008.09V8H9.5a.5.5 0 0 1 .09.992L9.5 9h-2a.5.5 0 0 1-.491-.41L7 8.5v-3a.5.5 0 0 1 .5-.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorClock160" x1="4" x2="10" y1="1.333" y2="14.667" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClock161" x1="7.264" x2="6.231" y1="5.612" y2="8.797" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClock16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
