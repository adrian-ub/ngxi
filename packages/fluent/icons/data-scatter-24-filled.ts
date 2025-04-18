import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataScatter24FilledIcon],svg[fluent-data-scatter-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 1 1 1v13.5A1.5 1.5 0 0 0 6.5 19H20a1 1 0 1 1 0 2H6.5A3.5 3.5 0 0 1 3 17.5V4a1 1 0 0 1 1-1m13 1a3 3 0 1 0 0 6a3 3 0 0 0 0-6M6 9a3 3 0 1 1 6 0a3 3 0 0 1-6 0m6 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class FluentDataScatter24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
