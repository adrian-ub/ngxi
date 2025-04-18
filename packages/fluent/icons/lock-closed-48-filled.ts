import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockClosed48FilledIcon],svg[fluent-lock-closed-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12a8 8 0 1 1 16 0v2h1.75A6.25 6.25 0 0 1 40 20.25v15.5A6.25 6.25 0 0 1 33.75 42h-19.5A6.25 6.25 0 0 1 8 35.75v-15.5A6.25 6.25 0 0 1 14.25 14H16zm8-5.5a5.5 5.5 0 0 0-5.5 5.5v2h11v-2A5.5 5.5 0 0 0 24 6.5M24 31a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class FluentLockClosed48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
