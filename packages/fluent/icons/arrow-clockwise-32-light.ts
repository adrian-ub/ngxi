import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise32LightIcon],svg[fluent-arrow-clockwise-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16C4 9.373 9.373 4 16 4c4.015 0 7.57 1.972 9.748 5H20.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-1 0v4.193A12.97 12.97 0 0 0 16 3C8.82 3 3 8.82 3 16s5.82 13 13 13s13-5.82 13-13q0-.801-.095-1.578a.484.484 0 0 0-.484-.422a.516.516 0 0 0-.504.581Q28 15.28 28 16c0 6.627-5.373 12-12 12S4 22.627 4 16"></svg:path>`,
})
export class FluentArrowClockwise32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
