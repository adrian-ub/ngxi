import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoubleSwipeUp20FilledIcon],svg[fluent-double-swipe-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.28 2.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06L5 4.56v9.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 0 0 1.06-1.06zM2 14.25c0-1.44.81-2.689 2-3.318v1.904a2.25 2.25 0 1 0 3.5 0v-1.904A3.75 3.75 0 0 1 5.75 18A3.75 3.75 0 0 1 2 14.25m10.5-3.318a3.75 3.75 0 1 0 3.5 0v1.904a2.25 2.25 0 1 1-3.5 0zm2.28-8.712a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v9.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 1 0 1.06-1.06z"></svg:path>`,
})
export class FluentDoubleSwipeUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
