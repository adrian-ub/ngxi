import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCollapseAll16RegularIcon],svg[fluent-arrow-collapse-all-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m3.146 2.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 1 1-.708.708L5 7.707V12.5a.5.5 0 0 1-1 0V7.707L2.854 8.854a.5.5 0 1 1-.708-.708zM14.5 6h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1"></svg:path>`,
})
export class FluentArrowCollapseAll16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
