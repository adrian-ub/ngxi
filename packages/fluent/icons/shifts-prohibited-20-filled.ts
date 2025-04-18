import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShiftsProhibited20FilledIcon],svg[fluent-shifts-prohibited-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3.6A5.5 5.5 0 0 0 3 9.6zm8 .5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H11zm-10 8a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.5 3.5 0 0 1 2 14.5M5.5 18c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 5.5 18"></svg:path>`,
})
export class FluentShiftsProhibited20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
