import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleUpLeft24RegularIcon],svg[fluent-arrow-circle-up-left-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.51 9.5h4.74a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0v-4.639l5.222 5.172a.75.75 0 0 0 1.056-1.066zM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8.5a8.5 8.5 0 1 0 0-17a8.5 8.5 0 0 0 0 17"></svg:path>`,
})
export class FluentArrowCircleUpLeft24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
