import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSwipeUp20FilledIcon],svg[fluent-swipe-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.53 2.22a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v9.69a.75.75 0 0 0 1.5 0V4.56l1.22 1.22a.75.75 0 1 0 1.06-1.06zM6 14a4 4 0 0 1 2.25-3.598v1.161a3 3 0 1 0 3.5 0v-1.16A4 4 0 1 1 6 14"></svg:path>`,
})
export class FluentSwipeUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
