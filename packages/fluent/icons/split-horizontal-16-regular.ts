import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSplitHorizontal16RegularIcon],svg[fluent-split-horizontal-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 8a.5.5 0 0 0 0-1h-13a.5.5 0 0 0 0 1zM3 6h1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h1V3a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm0 6V9h1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9h1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"></svg:path>`,
})
export class FluentSplitHorizontal16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
