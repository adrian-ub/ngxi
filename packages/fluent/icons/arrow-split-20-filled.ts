import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSplit20FilledIcon],svg[fluent-arrow-split-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3a.75.75 0 0 1 .75.75V8h2.245a2 2 0 0 1 2 2v4.443l1.225-1.223a.75.75 0 1 1 1.059 1.062l-2.504 2.5a.75.75 0 0 1-1.06-.001l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.219V10a.5.5 0 0 0-.5-.5H6.999a.5.5 0 0 0-.5.5v4.44l1.22-1.219a.75.75 0 0 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.061-1.06L5 14.44V10a2 2 0 0 1 2-2h2.25V3.75A.75.75 0 0 1 10 3"></svg:path>`,
})
export class FluentArrowSplit20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
