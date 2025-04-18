import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownLeft24FilledIcon],svg[fluent-arrow-down-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21a1 1 0 0 0 0-2H6.414L20.707 4.707a1 1 0 0 0-1.414-1.414L5 17.586V11a1 1 0 1 0-2 0v9a1 1 0 0 0 1 1z"></svg:path>`,
})
export class FluentArrowDownLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
