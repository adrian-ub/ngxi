import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColumnSingleCompare16FilledIcon],svg[fluent-column-single-compare-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 1A1.75 1.75 0 0 0 3 2.75v10.5A1.75 1.75 0 0 0 4.75 15h6.5A1.75 1.75 0 0 0 13 13.25V2.75A1.75 1.75 0 0 0 11.25 1zM4 5h8v1H4zm0 4h8v2H4z"></svg:path>`,
})
export class FluentColumnSingleCompare16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
