import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockOpen28FilledIcon],svg[fluent-lock-open-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5.5a3 3 0 1 1 6 0v1a.75.75 0 0 0 1.5 0v-1a4.5 4.5 0 1 0-9 0V8H7.75A3.75 3.75 0 0 0 4 11.75v9.5A3.75 3.75 0 0 0 7.75 25h11.5A3.75 3.75 0 0 0 23 21.25v-9.5A3.75 3.75 0 0 0 19.25 8H18zM13.5 18a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class FluentLockOpen28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
