import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColumnSingleCompare16RegularIcon],svg[fluent-column-single-compare-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.75C3 1.784 3.784 1 4.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 11.25 15h-6.5A1.75 1.75 0 0 1 3 13.25zM4.75 2a.75.75 0 0 0-.75.75V5h8V2.75a.75.75 0 0 0-.75-.75zM4 9h8V6H4zm0 2v2.25c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75V11z"></svg:path>`,
})
export class FluentColumnSingleCompare16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
