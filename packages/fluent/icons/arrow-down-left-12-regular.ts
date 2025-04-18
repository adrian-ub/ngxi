import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownLeft12RegularIcon],svg[fluent-arrow-down-left-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.854 1.146a.5.5 0 0 1 0 .708L2.707 10H7.53a.5.5 0 0 1 0 1H1.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 1 0v4.793l8.146-8.147a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class FluentArrowDownLeft12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
