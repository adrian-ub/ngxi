import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoubleTapSwipeDown20FilledIcon],svg[fluent-double-tap-swipe-down-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.53 17.78a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22V7.75a.75.75 0 1 1 1.5 0v7.69l1.22-1.22a.75.75 0 1 1 1.06 1.06zM4.25 7.5a5.75 5.75 0 0 0 4 5.479v-1.605a4.25 4.25 0 1 1 3.5 0v1.605A5.75 5.75 0 1 0 4.25 7.5m2.5 0a3.25 3.25 0 0 0 1.5 2.74V7.75q0-.063.004-.125a1.785 1.785 0 0 1 3.496.125v2.49a3.25 3.25 0 1 0-5-2.74"></svg:path>`,
})
export class FluentDoubleTapSwipeDown20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
