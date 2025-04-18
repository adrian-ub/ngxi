import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPeopleSubtract32FilledIcon],svg[fluent-people-subtract-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M27 11a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-9.904 6.207A8.98 8.98 0 0 0 14 24q.001.796.133 1.552c-.994.28-2.191.448-3.633.448C2 26 2 20.15 2 20.15V20a3 3 0 0 1 3-3h11c.387 0 .757.073 1.096.207M30.5 24a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0M18 23.75c0 .414.336.75.75.75h8.5a.75.75 0 0 0 0-1.5h-8.5a.75.75 0 0 0-.75.75"></svg:path>`,
})
export class FluentPeopleSubtract32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
