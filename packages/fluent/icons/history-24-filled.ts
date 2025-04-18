import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistory24FilledIcon],svg[fluent-history-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a7 7 0 1 1-6.946 6.124a1 1 0 1 0-1.984-.248Q3 11.43 3 12a9 9 0 1 0 4-7.484V4a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 0 0 0-2h-.608A6.97 6.97 0 0 1 12 5m1 3a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h2.5a1 1 0 1 0 0-2H13z"></svg:path>`,
})
export class FluentHistory24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
