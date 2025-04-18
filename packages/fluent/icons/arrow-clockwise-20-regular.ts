import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowClockwise20RegularIcon],svg[fluent-arrow-clockwise-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 10a6 6 0 0 1 10.472-4H12.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-1 0v1.601a7 7 0 1 0 1.98 4.361a.5.5 0 1 0-.998.076Q16 9.766 16 10a6 6 0 0 1-12 0"></svg:path>`,
})
export class FluentArrowClockwise20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
