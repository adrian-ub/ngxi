import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShiftsOpen24FilledIcon],svg[fluent-shifts-open-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 3a1 1 0 1 0 0 2h2.5A1.5 1.5 0 0 1 19 6.5v11a1.5 1.5 0 0 1-1.5 1.5H15a1 1 0 0 0 0 2h2.5a3.5 3.5 0 0 0 3.5-3.5v-11A3.5 3.5 0 0 0 17.5 3zM5 6.5A1.5 1.5 0 0 1 6.5 5H9a1 1 0 1 0 0-2H6.5A3.5 3.5 0 0 0 3 6.5v11A3.5 3.5 0 0 0 6.5 21H9a1 1 0 1 0 0-2H6.5A1.5 1.5 0 0 1 5 17.5zm7.5.5a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1h4.497a1 1 0 0 0 0-2H12.5z"></svg:path>`,
})
export class FluentShiftsOpen24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
