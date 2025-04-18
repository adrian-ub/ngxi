import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoubleSwipeDown24FilledIcon],svg[fluent-double-swipe-down-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.207 21.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414l1.293 1.293V7a1 1 0 1 1 2 0v11.586l1.293-1.293a1 1 0 1 1 1.414 1.414zM12.5 7a5 5 0 0 0 3 4.584V9.236a3 3 0 1 1 4 0v2.348A5.001 5.001 0 0 0 17.5 2a5 5 0 0 0-5 5m-8 4.584A5.001 5.001 0 0 1 6.5 2a5 5 0 0 1 2 9.584V9.236a3 3 0 1 0-4 0zm2.707 10.123a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L5.5 18.586V7a1 1 0 0 1 2 0v11.586l1.293-1.293a1 1 0 1 1 1.414 1.414z"></svg:path>`,
})
export class FluentDoubleSwipeDown24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
