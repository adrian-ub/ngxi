import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShiftsOpen24RegularIcon],svg[fluent-shifts-open-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6.25c0-.966.784-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5h-3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h3a.75.75 0 0 0 0-1.5h-3a1.75 1.75 0 0 1-1.75-1.75zM14.747 3a.75.75 0 0 0 0 1.5h3.003c.966 0 1.75.784 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75h-3.003a.75.75 0 0 0 0 1.5h3.003A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM12.5 6.75a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5H12.5z"></svg:path>`,
})
export class FluentShiftsOpen24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
