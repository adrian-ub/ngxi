import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockClosed28FilledIcon],svg[fluent-lock-closed-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6.5a4.5 4.5 0 1 1 9 0V8h1.25A3.75 3.75 0 0 1 23 11.75v9.5A3.75 3.75 0 0 1 19.25 25H7.75A3.75 3.75 0 0 1 4 21.25v-9.5A3.75 3.75 0 0 1 7.75 8H9zm4.5-3a3 3 0 0 0-3 3V8h6V6.5a3 3 0 0 0-3-3m0 14.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FluentLockClosed28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
