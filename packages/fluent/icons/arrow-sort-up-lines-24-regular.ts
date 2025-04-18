import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSortUpLines24RegularIcon],svg[fluent-arrow-sort-up-lines-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 21.25a.75.75 0 0 1-1.5 0V4.56l-2.22 2.22a.75.75 0 1 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-1.06 1.06L18 4.56zM2.75 19.5a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5zM6 14.75c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75m4.75-3.25a.75.75 0 0 1 0-1.5h2.5a.75.75 0 0 1 0 1.5z"></svg:path>`,
})
export class FluentArrowSortUpLines24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
