import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowHookUpLeft24RegularIcon],svg[fluent-arrow-hook-up-left-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19.25c0 .414.336.75.75.75H14c1.979 0 3.504-.823 4.52-2.074c1-1.233 1.48-2.846 1.48-4.426s-.48-3.193-1.48-4.426C17.504 7.823 15.979 7 14 7H7.56l2.47-2.47a.75.75 0 1 0-1.06-1.06L5.22 7.22a.75.75 0 0 0 0 1.06l3.75 3.75a.75.75 0 1 0 1.06-1.06L7.56 8.5H14c1.521 0 2.62.615 3.355 1.52c.75.923 1.145 2.185 1.145 3.48s-.396 2.557-1.145 3.48c-.734.905-1.834 1.52-3.355 1.52H7.75a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class FluentArrowHookUpLeft24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
