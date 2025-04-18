import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPhoneDesktop16RegularIcon],svg[fluent-phone-desktop-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H8v1h2v1H8v1h3.5a.5.5 0 0 0 0-1H11v-1h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2h1V3a1 1 0 0 1 1-1M3.5 12a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1zm-1-6A1.5 1.5 0 0 0 1 7.5v6A1.5 1.5 0 0 0 2.5 15h3A1.5 1.5 0 0 0 7 13.5v-6A1.5 1.5 0 0 0 5.5 6zm0 1h3a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentPhoneDesktop16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
