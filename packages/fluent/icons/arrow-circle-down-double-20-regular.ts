import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleDownDouble20RegularIcon],svg[fluent-arrow-circle-down-double-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 12.207l-1.646 1.647a.5.5 0 0 1-.708 0L5 12.207a.5.5 0 1 1 .707-.707l.793.793V6.5a.5.5 0 0 1 1 0v5.793l.793-.793a.5.5 0 1 1 .707.707M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m7-8a7 7 0 1 1-14 0a7 7 0 0 1 14 0m-3.646 3.854L15 12.207a.5.5 0 1 0-.707-.707l-.793.793V6.5a.5.5 0 0 0-1 0v5.793l-.793-.793a.5.5 0 1 0-.707.707l1.646 1.647a.5.5 0 0 0 .708 0"></svg:path>`,
})
export class FluentArrowCircleDownDouble20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
