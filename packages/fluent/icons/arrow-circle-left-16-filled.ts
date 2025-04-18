import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleLeft16FilledIcon],svg[fluent-arrow-circle-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14M4.538 8.191q.037.088.106.16l.003.003l2.5 2.5a.5.5 0 0 0 .707-.708L6.207 8.5H11a.5.5 0 0 0 0-1H6.207l1.647-1.646a.5.5 0 1 0-.708-.708l-2.5 2.5l-.002.003a.5.5 0 0 0-.106.542"></svg:path>`,
})
export class FluentArrowCircleLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
