import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnFour20RegularIcon],svg[fluent-layout-column-four-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM4 6a2 2 0 0 1 2-2v12a2 2 0 0 1-2-2zm6.5 10V4H13v12zm-1 0H7V4h2.5zm6.5-2a2 2 0 0 1-2 2V4a2 2 0 0 1 2 2z"></svg:path>`,
})
export class FluentLayoutColumnFour20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
