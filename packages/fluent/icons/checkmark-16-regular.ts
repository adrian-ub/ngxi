import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCheckmark16RegularIcon],svg[fluent-checkmark-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.864 3.655a.5.5 0 0 1-.021.707l-7.93 7.474a.6.6 0 0 1-.839-.016L2.394 9.1a.5.5 0 0 1 .712-.702l2.406 2.442l7.645-7.206a.5.5 0 0 1 .707.021"></svg:path>`,
})
export class FluentCheckmark16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
