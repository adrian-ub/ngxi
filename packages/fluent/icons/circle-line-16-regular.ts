import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleLine16RegularIcon],svg[fluent-circle-line-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0m-1.025.5h-9.95a5 5 0 0 0 9.95 0m0-1a5 5 0 0 0-9.95 0z"></svg:path>`,
})
export class FluentCircleLine16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
