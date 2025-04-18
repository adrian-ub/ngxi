import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowExpandAll24FilledIcon],svg[fluent-arrow-expand-all-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m10 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1M7.707 19.707a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6 16.586V9a1 1 0 1 1 2 0v7.586l1.293-1.293a1 1 0 0 1 1.414 1.414z"></svg:path>`,
})
export class FluentArrowExpandAll24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
