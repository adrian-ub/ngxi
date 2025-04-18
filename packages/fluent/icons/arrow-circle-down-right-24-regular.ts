import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleDownRight24RegularIcon],svg[fluent-arrow-circle-down-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.49 14.5H8.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-1.5 0v4.639L9.278 8.217a.75.75 0 1 0-1.056 1.066zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m10-8.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17"></svg:path>`,
})
export class FluentArrowCircleDownRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
