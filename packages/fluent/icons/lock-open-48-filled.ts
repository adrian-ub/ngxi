import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockOpen48FilledIcon],svg[fluent-lock-open-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 10a5.5 5.5 0 1 1 11 0v1a1.25 1.25 0 1 0 2.5 0v-1a8 8 0 1 0-16 0v4H14.25A6.25 6.25 0 0 0 8 20.25v15.5A6.25 6.25 0 0 0 14.25 42h19.5A6.25 6.25 0 0 0 40 35.75v-15.5A6.25 6.25 0 0 0 33.75 14H32zm-8 21a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class FluentLockOpen48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
