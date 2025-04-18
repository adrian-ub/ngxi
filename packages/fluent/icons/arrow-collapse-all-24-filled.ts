import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowCollapseAll24FilledIcon],svg[fluent-arrow-collapse-all-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m4.293 3.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1-1.414 1.414L8 11.414V19a1 1 0 1 1-2 0v-7.586l-1.293 1.293a1 1 0 0 1-1.414-1.414zM21 10h-9a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2"></svg:path>`,
})
export class FluentArrowCollapseAll24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
