import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualOff24RegularIcon],svg[fluent-equal-off-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06L6.94 8H3.75a.75.75 0 0 0 0 1.5h4.69l5 5H3.75a.75.75 0 0 0 0 1.5h11.19l5.78 5.78a.75.75 0 0 0 1.06-1.06zM20.25 14.5h-2.568l1.5 1.5h1.068a.75.75 0 0 0 0-1.5M11.182 8l1.5 1.5h7.568a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentEqualOff24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
