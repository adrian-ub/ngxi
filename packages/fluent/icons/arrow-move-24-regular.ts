import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMove24RegularIcon],svg[fluent-arrow-move-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.28 6.03a.75.75 0 0 1-1.06 0l-1.47-1.47v3.69a.75.75 0 0 1-1.5 0V4.56L9.78 6.03a.75.75 0 0 1-1.06-1.06l2.75-2.75a.75.75 0 0 1 1.06 0l2.75 2.75a.75.75 0 0 1 0 1.06m-9.25 8.19a.75.75 0 1 1-1.06 1.06l-2.75-2.75a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 0 1 1.06 1.06l-1.47 1.47h3.69a.75.75 0 0 1 0 1.5H4.56zm11.94 1.06a.75.75 0 0 1 0-1.06l1.47-1.47h-3.69a.75.75 0 0 1 0-1.5h3.69l-1.47-1.47a.75.75 0 0 1 1.06-1.06l2.75 2.75a.75.75 0 0 1 0 1.06l-2.75 2.75a.75.75 0 0 1-1.06 0m-2.69 2.69a.75.75 0 0 0-1.06 0l-1.47 1.47v-3.69a.75.75 0 0 0-1.5 0v3.69l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2.75 2.75a.75.75 0 0 0 1.06 0l2.75-2.75a.75.75 0 0 0 0-1.06"></svg:path>`,
})
export class FluentArrowMove24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
