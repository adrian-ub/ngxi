import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCircleRight20RegularIcon],svg[fluent-arrow-circle-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.854 13.354l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 9.5H6.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-8 7a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path>`,
})
export class FluentArrowCircleRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
