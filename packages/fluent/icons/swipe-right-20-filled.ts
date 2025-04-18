import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSwipeRight20FilledIcon],svg[fluent-swipe-right-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6a4 4 0 0 1 3.598 2.25H8.437a3 3 0 1 0 0 3.5h1.16A4 4 0 1 1 6 6m9.28 7.03l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H5.75a.75.75 0 1 0 0 1.5h9.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06"></svg:path>`,
})
export class FluentSwipeRight20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
