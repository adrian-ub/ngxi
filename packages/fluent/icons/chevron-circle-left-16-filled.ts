import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleLeft16FilledIcon],svg[fluent-chevron-circle-left-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 14A6 6 0 1 1 8 2a6 6 0 0 1 0 12m.646-8.854l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L7.207 8l2.147-2.146a.5.5 0 1 0-.708-.708"></svg:path>`,
})
export class FluentChevronCircleLeft16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
