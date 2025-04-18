import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceUnknown12RegularIcon],svg[fluent-presence-unknown-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6"></svg:path>`,
})
export class FluentPresenceUnknown12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
