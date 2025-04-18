import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShifts32RegularIcon],svg[fluent-shifts-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.006 8a1 1 0 0 1 1 1v7h5a1 1 0 0 1 0 2h-6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1M9 4a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5zM6 9a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"></svg:path>`,
})
export class FluentShifts32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
