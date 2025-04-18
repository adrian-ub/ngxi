import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShiftsActivity24FilledIcon],svg[fluent-shifts-activity-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.11 4.049a1 1 0 1 0-.22-1.988C5.888 2.614 2 6.852 2 12c0 5.523 4.477 10 10 10c5.146 0 9.383-3.887 9.939-8.885a1 1 0 0 0-1.988-.221A8.001 8.001 0 0 1 4 12a8 8 0 0 1 7.11-7.951m3.657-1.658a1 1 0 0 0-.54 1.925q.432.122.842.29a1 1 0 0 0 .757-1.852a10 10 0 0 0-1.059-.363m2.582 2.3a1 1 0 0 1 1.413-.06q.318.291.609.608a1 1 0 0 1-1.474 1.352a8 8 0 0 0-.486-.486a1 1 0 0 1-.062-1.413M11 6a1 1 0 0 1 1 1v5h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m8.94 1.623a1 1 0 0 1 1.304.547a10 10 0 0 1 .365 1.063a1 1 0 1 1-1.925.54a8 8 0 0 0-.291-.846a1 1 0 0 1 .546-1.304"></svg:path>`,
})
export class FluentShiftsActivity24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
