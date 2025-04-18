import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleUpLeft20FilledIcon],svg[fluent-arrow-circle-up-left-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M7.149 7.144A.5.5 0 0 1 7.5 7h5a.5.5 0 0 1 0 1H8.707l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707V12.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .144-.351z"></svg:path>`,
})
export class FluentArrowCircleUpLeft20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
