import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignLeft16RegularIcon],svg[fluent-align-left-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0zm3.75.5A1.75 1.75 0 0 0 4 3.75v1.5C4 6.216 4.784 7 5.75 7h6.5A1.75 1.75 0 0 0 14 5.25v-1.5A1.75 1.75 0 0 0 12.25 2zM5 3.75A.75.75 0 0 1 5.75 3h6.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-6.5A.75.75 0 0 1 5 5.25zM5.75 9A1.75 1.75 0 0 0 4 10.75v1.5c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0 0 12 12.25v-1.5A1.75 1.75 0 0 0 10.25 9zM5 10.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class FluentAlignLeft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
