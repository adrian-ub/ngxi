import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRecord12RegularIcon],svg[fluent-record-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5-3A5 5 0 1 1 1 6a5 5 0 0 1 10 0m-1 0a4 4 0 1 0-8 0a4 4 0 0 0 8 0"></svg:path>`,
})
export class FluentRecord12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
