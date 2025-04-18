import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChevronCircleDown16FilledIcon],svg[fluent-chevron-circle-down-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8m8.854-.646l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L8 8.793l2.146-2.147a.5.5 0 0 1 .708.708"></svg:path>`,
})
export class FluentChevronCircleDown16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
