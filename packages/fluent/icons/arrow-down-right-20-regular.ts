import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowDownRight20RegularIcon],svg[fluent-arrow-down-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 16a.5.5 0 0 0 0 1h8a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-1 0v6.793L3.854 3.146a.5.5 0 1 0-.708.708L15.293 16z"></svg:path>`,
})
export class FluentArrowDownRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
