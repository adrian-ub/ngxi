import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockOpen20FilledIcon],svg[fluent-lock-open-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2a2 2 0 0 0-2 2v2h1a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6V4a3 3 0 1 1 6 0v.5a.5.5 0 0 1-1 0V4a2 2 0 0 0-2-2m-5 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class FluentLockOpen20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
