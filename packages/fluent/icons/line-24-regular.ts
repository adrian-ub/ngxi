import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLine24RegularIcon],svg[fluent-line-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.784 2.22a.75.75 0 0 1 0 1.06L3.28 21.784a.75.75 0 1 1-1.06-1.06L20.723 2.22a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class FluentLine24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
