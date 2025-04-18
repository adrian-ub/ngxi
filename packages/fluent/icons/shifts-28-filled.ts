import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShifts28FilledIcon],svg[fluent-shifts-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.25A3.25 3.25 0 0 1 6.25 3h15.5A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75zm11.5 1.5a.75.75 0 0 0-1.5 0v7c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5H14.5z"></svg:path>`,
})
export class FluentShifts28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
