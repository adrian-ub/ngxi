import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoubleTapSwipeUp16FilledIcon],svg[fluent-double-tap-swipe-up-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10.5a4 4 0 1 0 5.75-3.598V5.284a5.5 5.5 0 1 1-3.5 0v1.618A4 4 0 0 0 4 10.5m7 0a3 3 0 0 0-1.25-2.437v2.187a1.75 1.75 0 1 1-3.5 0V8.063A3 3 0 1 0 11 10.5m-2.25-.25a.75.75 0 0 1-1.5 0V3.06L6.03 4.28a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06L8.75 3.06z"></svg:path>`,
})
export class FluentDoubleTapSwipeUp16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
