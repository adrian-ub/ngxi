import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualOff12FilledIcon],svg[fluent-equal-off-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.854 1.146a.5.5 0 1 0-.708.708L2.793 3.5H2.25a.75.75 0 0 0 0 1.5h2.043l2 2H2.25a.75.75 0 0 0 0 1.5h5.543l2.353 2.354a.5.5 0 0 0 .708-.708zM9.12 7l1.217 1.216A.75.75 0 0 0 9.75 7zm-3.5-3.5L7.12 5h2.63a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentEqualOff12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
