import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleUpRight16FilledIcon],svg[fluent-arrow-circle-up-right-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m10-2.5V10a.5.5 0 0 1-1 0V6.707l-3.646 3.647a.5.5 0 0 1-.708-.708L9.293 6H6a.5.5 0 0 1 0-1h4.5a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class FluentArrowCircleUpRight16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
