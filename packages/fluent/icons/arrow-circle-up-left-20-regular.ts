import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleUpLeft20RegularIcon],svg[fluent-arrow-circle-up-left-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.149 7.144A.5.5 0 0 1 7.5 7h5a.5.5 0 0 1 0 1H8.707l4.147 4.146a.5.5 0 0 1-.708.708L8 8.707V12.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .144-.351zM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0"></svg:path>`,
})
export class FluentArrowCircleUpLeft20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
