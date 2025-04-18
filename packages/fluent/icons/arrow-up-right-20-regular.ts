import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRight20RegularIcon],svg[fluent-arrow-up-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4a.5.5 0 1 1 0-1h8a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4.707L3.854 16.854a.5.5 0 0 1-.708-.708L15.293 4z"></svg:path>`,
})
export class FluentArrowUpRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
