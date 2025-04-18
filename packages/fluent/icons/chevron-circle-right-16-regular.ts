import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleRight16RegularIcon],svg[fluent-chevron-circle-right-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m6-5A6 6 0 1 1 2 8a6 6 0 0 1 12 0M7.354 5.146l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L8.793 8L6.646 5.854a.5.5 0 1 1 .708-.708"></svg:path>`,
})
export class FluentChevronCircleRight16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
