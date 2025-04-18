import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRotateClockwise20FilledIcon],svg[fluent-arrow-rotate-clockwise-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3.5A6.5 6.5 0 0 0 3.5 10A.75.75 0 0 1 2 10a8 8 0 1 1 12.665 6.5h1.085a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75v-3a.75.75 0 0 1 1.5 0v1.228A6.5 6.5 0 0 0 10 3.5m2.5 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M11 10a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class FluentArrowRotateClockwise20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
