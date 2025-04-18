import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReOrderDotsHorizontal24RegularIcon],svg[fluent-re-order-dots-horizontal-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 15.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m7 7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0-7a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentReOrderDotsHorizontal24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
