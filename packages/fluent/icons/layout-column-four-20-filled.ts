import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnFour20FilledIcon],svg[fluent-layout-column-four-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM13 3h-2.5v14H13zM7 3h2.5v14H7zM6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3z"></svg:path>`,
})
export class FluentLayoutColumnFour20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
