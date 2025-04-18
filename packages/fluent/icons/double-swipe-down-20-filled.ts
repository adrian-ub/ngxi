import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoubleSwipeDown20FilledIcon],svg[fluent-double-swipe-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.28 17.78a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06L5 15.44V5.75a.75.75 0 0 1 1.5 0v9.69l1.22-1.22a.75.75 0 1 1 1.06 1.06zM2 5.75a3.75 3.75 0 0 0 2 3.317V7.164a2.25 2.25 0 1 1 3.5 0v1.903A3.75 3.75 0 0 0 5.75 2A3.75 3.75 0 0 0 2 5.75m10.5 3.317A3.75 3.75 0 0 1 14.25 2A3.75 3.75 0 0 1 16 9.067V7.164a2.25 2.25 0 1 0-3.5 0zm2.28 8.713a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 0 1 1.06-1.06l1.22 1.22V5.75a.75.75 0 0 1 1.5 0v9.69l1.22-1.22a.75.75 0 1 1 1.06 1.06z"></svg:path>`,
})
export class FluentDoubleSwipeDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
