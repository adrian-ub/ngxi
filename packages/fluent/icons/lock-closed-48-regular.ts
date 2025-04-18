import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockClosed48RegularIcon],svg[fluent-lock-closed-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28a3 3 0 1 1-6 0a3 3 0 0 1 6 0M16 14v-2a8 8 0 1 1 16 0v2h1.75A6.25 6.25 0 0 1 40 20.25v15.5A6.25 6.25 0 0 1 33.75 42h-19.5A6.25 6.25 0 0 1 8 35.75v-15.5A6.25 6.25 0 0 1 14.25 14zm2.5-2v2h11v-2a5.5 5.5 0 1 0-11 0m-4.25 4.5a3.75 3.75 0 0 0-3.75 3.75v15.5a3.75 3.75 0 0 0 3.75 3.75h19.5a3.75 3.75 0 0 0 3.75-3.75v-15.5a3.75 3.75 0 0 0-3.75-3.75z"></svg:path>`,
})
export class FluentLockClosed48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
