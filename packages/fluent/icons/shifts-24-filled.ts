import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShifts24FilledIcon],svg[fluent-shifts-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3zm-6 3a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h4.498a.75.75 0 0 0 0-1.5H12.5V6.75a.75.75 0 0 0-.75-.75"></svg:path>`,
})
export class FluentShifts24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
