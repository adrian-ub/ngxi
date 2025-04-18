import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentComponent2DoubleTapSwipeDown24RegularIcon],svg[fluent-component-2-double-tap-swipe-down-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8a.75.75 0 0 1 .743.648l.007.102v10.705l2.22-2.218a.75.75 0 0 1 .976-.073l.084.072a.75.75 0 0 1 .073.977l-.073.084l-3.5 3.5a.75.75 0 0 1-.976.073l-.084-.073l-3.5-3.5a.75.75 0 0 1 .976-1.133l.084.072l2.22 2.219V8.75A.75.75 0 0 1 12 8m0-6a7 7 0 0 1 1.75 13.78v-1.564a5.5 5.5 0 1 0-3.5 0v1.563A7 7 0 0 1 12 2m0 2.5a4.5 4.5 0 0 1 1.751 8.647v-1.71a3 3 0 1 0-3.5 0l-.001 1.71A4.501 4.501 0 0 1 12 4.5"></svg:path>`,
})
export class FluentComponent2DoubleTapSwipeDown24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
