import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorClock20Icon],svg[fluent-color-clock-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorClock200)" d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16"></svg:path><svg:path fill="url(#fluentColorClock201)" d="M9.5 5a.5.5 0 0 1 .492.41L10 5.5V10h2.5a.5.5 0 0 1 .09.992L12.5 11h-3a.5.5 0 0 1-.492-.41L9 10.5v-5a.5.5 0 0 1 .5-.5"></svg:path><svg:defs><svg:lineargradient id="fluentColorClock200" x1="4.667" x2="12.667" y1="1.111" y2="18.889" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1EC8B0"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient><svg:lineargradient id="fluentColorClock201" x1="9.35" x2="7.65" y1="5.918" y2="10.578" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FDFDFD"></svg:stop><svg:stop offset="1" stop-color="#D1D1FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorClock20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
