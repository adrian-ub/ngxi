import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceOffline10RegularIcon],svg[fluent-presence-offline-10-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.854 3.146a.5.5 0 0 1 0 .708L5.707 5l1.147 1.146a.5.5 0 1 1-.708.708L5 5.707L3.854 6.854a.5.5 0 1 1-.708-.708L4.293 5L3.146 3.854a.5.5 0 1 1 .708-.708L5 4.293l1.146-1.147a.5.5 0 0 1 .708 0M0 5a5 5 0 1 1 10 0A5 5 0 0 1 0 5m5-4a4 4 0 1 0 0 8a4 4 0 0 0 0-8"></svg:path>`,
})
export class FluentPresenceOffline10RegularIcon {
  readonly viewBox = input("0 0 10 10")
  readonly width = input("1em")
  readonly height = input("1em")
}
