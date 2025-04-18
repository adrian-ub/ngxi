import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookDownLeft24RegularIcon],svg[fluent-arrow-hook-down-left-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.75A.75.75 0 0 1 7.75 4H14c1.979 0 3.504.823 4.52 2.074C19.52 7.307 20 8.92 20 10.5s-.48 3.193-1.48 4.426C17.504 16.177 15.979 17 14 17H7.56l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 1 1 1.06 1.06L7.56 15.5H14c1.521 0 2.62-.615 3.355-1.52c.75-.923 1.145-2.185 1.145-3.48s-.396-2.557-1.145-3.48C16.621 6.115 15.521 5.5 14 5.5H7.75A.75.75 0 0 1 7 4.75"></svg:path>`,
})
export class FluentArrowHookDownLeft24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
