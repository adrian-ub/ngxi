import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronUpDown24RegularIcon],svg[fluent-chevron-up-down-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.54 2.23a.75.75 0 0 0-1.08 0l-6.25 6.5a.75.75 0 1 0 1.08 1.04L12 3.832l5.71 5.938a.75.75 0 1 0 1.08-1.04zm0 19.54a.75.75 0 0 1-1.08 0l-6.25-6.5a.75.75 0 1 1 1.08-1.04L12 20.168l5.71-5.938a.75.75 0 1 1 1.08 1.04z"></svg:path>`,
})
export class FluentChevronUpDown24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
