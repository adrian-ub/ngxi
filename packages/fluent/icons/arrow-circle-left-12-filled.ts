import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleLeft12FilledIcon],svg[fluent-arrow-circle-left-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1m-.098 2.646a.5.5 0 0 1 0 .708L4.756 5.5H8.5a.5.5 0 0 1 0 1H4.756l1.146 1.146a.5.5 0 1 1-.707.708l-2-2a.5.5 0 0 1 0-.708l2-2a.5.5 0 0 1 .707 0"></svg:path>`,
})
export class FluentArrowCircleLeft12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
