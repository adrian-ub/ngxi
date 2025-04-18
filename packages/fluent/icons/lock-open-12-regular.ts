import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLockOpen12RegularIcon],svg[fluent-lock-open-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a1 1 0 0 1 2 0a.5.5 0 0 0 1 0a2 2 0 1 0-4 0v1H3.5A1.5 1.5 0 0 0 2 5.5v4A1.5 1.5 0 0 0 3.5 11h5A1.5 1.5 0 0 0 10 9.5v-4A1.5 1.5 0 0 0 8.5 4H8zM3.5 5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentLockOpen12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
