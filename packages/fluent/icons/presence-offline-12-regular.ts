import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceOffline12RegularIcon],svg[fluent-presence-offline-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.03 3.97a.75.75 0 0 1 0 1.06L7.06 6l.97.97a.75.75 0 0 1-1.06 1.06L6 7.06l-.97.97a.75.75 0 0 1-1.06-1.06L4.94 6l-.97-.97a.75.75 0 0 1 1.06-1.06l.97.97l.97-.97a.75.75 0 0 1 1.06 0M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6m6-4.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9"></svg:path>`,
})
export class FluentPresenceOffline12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
