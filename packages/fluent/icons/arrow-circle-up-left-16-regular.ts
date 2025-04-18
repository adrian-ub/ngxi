import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleUpLeft16RegularIcon],svg[fluent-arrow-circle-up-left-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7a7 7 0 1 0 0 14A7 7 0 0 0 8 1M5.5 5a.5.5 0 0 0-.5.5V10a.5.5 0 0 0 1 0V6.707l3.646 3.647a.5.5 0 0 0 .708-.708L6.707 6H10a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentArrowCircleUpLeft16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
