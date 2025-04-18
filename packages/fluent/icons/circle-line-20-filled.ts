import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleLine20FilledIcon],svg[fluent-circle-line-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.985 10.5H2.015a8 8 0 0 0 15.97 0m0-1H2.015a8 8 0 0 1 15.97 0"></svg:path>`,
})
export class FluentCircleLine20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
