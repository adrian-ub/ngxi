import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlignLeft16FilledIcon],svg[fluent-align-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1.5a.5.5 0 0 1 1 0v13a.5.5 0 0 1-1 0zm3.75.5A1.75 1.75 0 0 0 4 3.75v1.5C4 6.216 4.784 7 5.75 7h6.5A1.75 1.75 0 0 0 14 5.25v-1.5A1.75 1.75 0 0 0 12.25 2zm0 7A1.75 1.75 0 0 0 4 10.75v1.5c0 .966.784 1.75 1.75 1.75h4.5A1.75 1.75 0 0 0 12 12.25v-1.5A1.75 1.75 0 0 0 10.25 9z"></svg:path>`,
})
export class FluentAlignLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
