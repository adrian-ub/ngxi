import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDoubleSwipeUp24FilledIcon],svg[fluent-double-swipe-up-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.207 2.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L16.5 5.414V17a1 1 0 1 0 2 0V5.414l1.293 1.293a1 1 0 1 0 1.414-1.414zM12.5 17a5 5 0 0 1 3-4.584v2.348a3 3 0 1 0 4 0v-2.348a5.001 5.001 0 0 1-2 9.584a5 5 0 0 1-5-5m-8-4.584A5.001 5.001 0 0 0 6.5 22a5 5 0 0 0 2-9.584v2.348a3 3 0 1 1-4 0zM7.207 2.293a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.414L5.5 5.414V17a1 1 0 1 0 2 0V5.414l1.293 1.293a1 1 0 0 0 1.414-1.414z"></svg:path>`,
})
export class FluentDoubleSwipeUp24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
