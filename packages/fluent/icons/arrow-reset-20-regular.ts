import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReset20RegularIcon],svg[fluent-arrow-reset-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.854 2.646a.5.5 0 0 1 0 .708L4.207 5H11a6 6 0 1 1-6 6a.5.5 0 0 1 1 0a5 5 0 1 0 5-5H4.207l1.647 1.646a.5.5 0 1 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentArrowReset20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
