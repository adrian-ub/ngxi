import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShifts32FilledIcon],svg[fluent-shifts-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 9a5 5 0 0 1 5-5h14a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zm12.006 0a1 1 0 0 0-2 0v8a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-5z"></svg:path>`,
})
export class FluentShifts32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
