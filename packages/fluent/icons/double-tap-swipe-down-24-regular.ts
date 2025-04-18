import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoubleTapSwipeDown24RegularIcon],svg[fluent-double-tap-swipe-down-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.53 21.78a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06l2.22 2.22V8.75a.75.75 0 0 1 1.5 0v10.69l2.22-2.22a.75.75 0 1 1 1.06 1.06zM5 9a7 7 0 0 0 5.25 6.78v-1.564A5.502 5.502 0 0 1 12 3.5a5.5 5.5 0 0 1 1.75 10.716v1.564A7 7 0 1 0 5 9m2.5 0a4.5 4.5 0 0 0 2.75 4.147v-1.71a3 3 0 1 1 3.5 0v1.71A4.501 4.501 0 1 0 7.5 9"></svg:path>`,
})
export class FluentDoubleTapSwipeDown24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
