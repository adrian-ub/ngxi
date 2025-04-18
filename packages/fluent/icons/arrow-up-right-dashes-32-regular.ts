import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes32RegularIcon],svg[fluent-arrow-up-right-dashes-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 1 0 0 2h10.586l-5.293 5.293a1 1 0 0 0 1.414 1.414L27 6.414V17a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1zm-3.793 19.207a1 1 0 0 0-1.414-1.414l-6.5 6.5a1 1 0 1 0 1.414 1.414zm8-9.414a1 1 0 0 1 0 1.414l-5.5 5.5a1 1 0 0 1-1.414-1.414l5.5-5.5a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentArrowUpRightDashes32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
