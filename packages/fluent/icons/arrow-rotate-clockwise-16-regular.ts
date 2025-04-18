import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowRotateClockwise16RegularIcon],svg[fluent-arrow-rotate-clockwise-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a5 5 0 0 0-5 5a.5.5 0 0 1-1 0a6 6 0 1 1 9.969 4.5H13a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-2.5a.5.5 0 0 1 1 0V12a5 5 0 0 0-3-9M6 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class FluentArrowRotateClockwise16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
