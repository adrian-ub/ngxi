import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockOpen48RegularIcon],svg[fluent-lock-open-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 10a5.5 5.5 0 1 1 11 0v1a1.25 1.25 0 1 0 2.5 0v-1a8 8 0 1 0-16 0v4H14.25A6.25 6.25 0 0 0 8 20.25v15.5A6.25 6.25 0 0 0 14.25 42h19.5A6.25 6.25 0 0 0 40 35.75v-15.5A6.25 6.25 0 0 0 33.75 14H32zm-17.75 6.5h19.5a3.75 3.75 0 0 1 3.75 3.75v15.5a3.75 3.75 0 0 1-3.75 3.75h-19.5a3.75 3.75 0 0 1-3.75-3.75v-15.5a3.75 3.75 0 0 1 3.75-3.75M27 28a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class FluentLockOpen48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
