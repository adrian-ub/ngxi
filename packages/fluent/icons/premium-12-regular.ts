import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPremium12RegularIcon],svg[fluent-premium-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.988 1H3a.5.5 0 0 0-.447.277l-1.5 3A.5.5 0 0 0 1.1 4.8l4.493 5.99a.5.5 0 0 0 .59.175a.5.5 0 0 0 .224-.174L10.9 4.8a.5.5 0 0 0 .047-.524l-1.5-3A.5.5 0 0 0 9 1zM6.64 2l.666 2H4.694l.666-2zm1.72 2l-.666-2h.997l1 2zM7.306 5L6 8.92L4.694 5zm.143 2.735L8.36 5H9.5zm-2.898 0L2.5 5h1.14zM3.64 4H2.309l1-2h.997z"></svg:path>`,
})
export class FluentPremium12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
