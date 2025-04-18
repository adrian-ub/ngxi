import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronLeft28RegularIcon],svg[fluent-chevron-left-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.03 22.78a.75.75 0 0 1-1.06 0l-8.75-8.75a.75.75 0 0 1 0-1.06l8.75-8.75a.75.75 0 1 1 1.06 1.06L9.81 13.5l8.22 8.22a.75.75 0 0 1 0 1.06"></svg:path>`,
})
export class FluentChevronLeft28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
