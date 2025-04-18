import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes28FilledIcon],svg[fluent-arrow-up-right-dashes-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 15a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1H13a1 1 0 1 0 0 2h8.586l-4.293 4.293a1 1 0 0 0 1.414 1.414L23 6.414zM8.707 20.707a1 1 0 1 0-1.414-1.414l-4 4a1 1 0 1 0 1.414 1.414zm7-8.414a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentArrowUpRightDashes28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
