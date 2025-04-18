import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoubleTapSwipeUp24RegularIcon],svg[fluent-double-tap-swipe-up-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 2.22a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 1.06 1.06l2.22-2.22v10.69a.75.75 0 0 0 1.5 0V4.56l2.22 2.22a.75.75 0 1 0 1.06-1.06zM5 15a7 7 0 0 1 5.25-6.78v1.564a5.5 5.5 0 1 0 3.5 0V8.22A7 7 0 1 1 5 15m2.5 0a4.5 4.5 0 0 1 2.75-4.147v1.71a3 3 0 1 0 3.5 0v-1.71A4.501 4.501 0 1 1 7.5 15"></svg:path>`,
})
export class FluentDoubleTapSwipeUp24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
