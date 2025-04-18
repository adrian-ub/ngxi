import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSplit24FilledIcon],svg[fluent-arrow-split-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a1 1 0 0 1 1 1v5h2.25A2.75 2.75 0 0 1 18 11.75v5.836l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 1.414-1.414L16 17.586V11.75a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v5.836l1.293-1.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L6 17.586V11.75A2.75 2.75 0 0 1 8.75 9H11V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentArrowSplit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
