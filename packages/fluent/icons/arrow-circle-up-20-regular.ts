import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleUp20RegularIcon],svg[fluent-arrow-circle-up-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.646 9.146l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L10.5 7.707V13.5a.5.5 0 0 1-1 0V7.707L7.354 9.854a.5.5 0 0 1-.708-.708M10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m-7 8a7 7 0 1 1 14 0a7 7 0 0 1-14 0"></svg:path>`,
})
export class FluentArrowCircleUp20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
