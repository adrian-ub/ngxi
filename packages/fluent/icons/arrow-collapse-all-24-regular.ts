import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCollapseAll24RegularIcon],svg[fluent-arrow-collapse-all-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4.75A.75.75 0 0 1 2.75 4h18.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75m10 4a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75m-4.72-.53a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06L6 10.56v8.69a.75.75 0 0 0 1.5 0v-8.69l1.72 1.72a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class FluentArrowCollapseAll24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
