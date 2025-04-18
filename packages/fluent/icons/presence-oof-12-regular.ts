import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPresenceOof12RegularIcon],svg[fluent-presence-oof-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.281 4.528a.75.75 0 0 0-1.06-1.06L3.218 5.47a.75.75 0 0 0 0 1.06l2.003 2.003a.75.75 0 0 0 1.06-1.061L5.56 6.75h2.69a.75.75 0 1 0 0-1.5H5.56zM6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0M1.5 6a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0"></svg:path>`,
})
export class FluentPresenceOof12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
