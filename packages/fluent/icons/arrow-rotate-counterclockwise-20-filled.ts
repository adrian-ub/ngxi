import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRotateCounterclockwise20FilledIcon],svg[fluent-arrow-rotate-counterclockwise-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3.5a6.5 6.5 0 0 1 6.5 6.5a.75.75 0 0 0 1.5 0a8 8 0 1 0-12.664 6.5H4.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 .75-.75v-3a.75.75 0 0 0-1.5 0v1.228A6.5 6.5 0 0 1 10 3.5M7.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0M9 10a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path>`,
})
export class FluentArrowRotateCounterclockwise20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
