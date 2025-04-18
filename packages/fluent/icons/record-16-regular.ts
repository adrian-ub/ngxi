import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRecord16RegularIcon],svg[fluent-record-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8"></svg:path>`,
})
export class FluentRecord16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
