import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownLeft28FilledIcon],svg[fluent-arrow-down-left-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.707 3.293a1 1 0 0 1 0 1.414L6.414 23H15a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1V13a1 1 0 1 1 2 0v8.586L23.293 3.293a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentArrowDownLeft28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
