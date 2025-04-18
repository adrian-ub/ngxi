import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSwipeDown20FilledIcon],svg[fluent-swipe-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a4 4 0 0 1-2.25 3.598V8.437a3 3 0 1 0-3.5 0v1.16A4 4 0 1 1 14 6M9.47 17.78a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V5.75a.75.75 0 0 0-1.5 0v9.69l-1.22-1.22a.75.75 0 0 0-1.06 1.06z"></svg:path>`,
})
export class FluentSwipeDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
