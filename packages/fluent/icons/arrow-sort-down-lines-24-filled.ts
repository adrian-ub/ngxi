import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSortDownLines24FilledIcon],svg[fluent-arrow-sort-down-lines-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 3a1 1 0 1 0-2 0v15.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l3.5 3.5a1 1 0 0 0 1.414 0l3.5-3.5a1 1 0 0 0-1.414-1.414L18 18.586zM3 4a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2zm3 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m5 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentArrowSortDownLines24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
