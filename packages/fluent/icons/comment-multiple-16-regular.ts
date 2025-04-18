import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentMultiple16RegularIcon],svg[fluent-comment-multiple-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9.005v1.727A2 2 0 0 0 15 9V6a4 4 0 0 0-4-4H5a2 2 0 0 0-1.732 1H11a3 3 0 0 1 3 3zM3 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2v.998a1 1 0 0 0 1.588.809L7.073 13H11a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM2 6a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H6.747L4 13.998V12H3a1 1 0 0 1-1-1z"></svg:path>`,
})
export class FluentCommentMultiple16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
