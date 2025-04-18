import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowReplyAll24FilledIcon],svg[fluent-arrow-reply-all-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.707 5.293a1 1 0 0 1 0 1.414L5.414 11l4.293 4.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0m5 0a1 1 0 0 1 0 1.414L11.414 10H13a8 8 0 0 1 8 8a1 1 0 1 1-2 0a6 6 0 0 0-6-6h-1.586l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class FluentArrowReplyAll24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
