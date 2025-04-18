import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentIosChevron24RegularIcon],svg[fluent-ios-chevron-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.97 4.72a.75.75 0 0 0 0 1.06L20.19 12l-6.22 6.22a.75.75 0 1 0 1.06 1.06l6.75-6.75a.75.75 0 0 0 0-1.06l-6.75-6.75a.75.75 0 0 0-1.06 0z" fill="currentColor" fill-rule="nonzero"></svg:path>`,
})
export class FluentIosChevron24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
