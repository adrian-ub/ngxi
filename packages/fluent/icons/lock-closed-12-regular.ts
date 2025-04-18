import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockClosed12RegularIcon],svg[fluent-lock-closed-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4V3a2 2 0 1 1 4 0v1h.5A1.5 1.5 0 0 1 10 5.5v4A1.5 1.5 0 0 1 8.5 11h-5A1.5 1.5 0 0 1 2 9.5v-4A1.5 1.5 0 0 1 3.5 4zm1-1v1h2V3a1 1 0 0 0-2 0M3.5 5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z"></svg:path>`,
})
export class FluentLockClosed12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
