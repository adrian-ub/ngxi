import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleLine16FilledIcon],svg[fluent-circle-line-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.98 8.5a6 6 0 0 1-11.96 0zm0-1H2.02a6 6 0 0 1 11.96 0"></svg:path>`,
})
export class FluentCircleLine16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
