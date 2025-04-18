import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceBlocked10RegularIcon],svg[fluent-presence-blocked-10-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 5A5 5 0 1 0 0 5a5 5 0 0 0 10 0M9 5a4 4 0 0 1-6.453 3.16L8.16 2.547C8.686 3.224 9 4.076 9 5M7.453 1.84L1.84 7.453A4 4 0 0 1 7.453 1.84"></svg:path>`,
})
export class FluentPresenceBlocked10RegularIcon {
  readonly viewBox = input("0 0 10 10")
  readonly width = input("1em")
  readonly height = input("1em")
}
