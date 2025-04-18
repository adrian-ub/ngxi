import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleUpLeft16FilledIcon],svg[fluent-arrow-circle-up-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 5H10a.5.5 0 0 1 0 1H6.707l3.647 3.646a.5.5 0 0 1-.708.708L6 6.707V10a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentArrowCircleUpLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
