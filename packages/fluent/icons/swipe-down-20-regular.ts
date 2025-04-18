import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSwipeDown20RegularIcon],svg[fluent-swipe-down-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6a4 4 0 0 1-2.5 3.71V8.598a3 3 0 1 0-3 0v1.11A4.001 4.001 0 0 1 10 2a4 4 0 0 1 4 4M9.646 17.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.707L10.5 16.293V5.5a.5.5 0 0 0-1 0v10.793l-2.146-2.146a.5.5 0 1 0-.708.707z"></svg:path>`,
})
export class FluentSwipeDown20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
