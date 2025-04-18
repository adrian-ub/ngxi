import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGridCircles24RegularIcon],svg[fluent-grid-circles-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 7a4 4 0 1 0-8 0a4 4 0 0 0 8 0M9.5 7a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M21 7a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-1.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M7 21a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-1.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M21 17a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-1.5 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path>`,
})
export class FluentGridCircles24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
