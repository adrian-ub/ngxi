import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentAdd24RegularIcon],svg[fluent-comment-add-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M18 7l.001 2.504a.5.5 0 1 1-1 0V7h-2.505a.5.5 0 0 1 0-1H17V3.5a.5.5 0 0 1 1 0V6h2.497a.5.5 0 0 1 0 1zm2.5 7.75v-2.482A6.5 6.5 0 0 0 22 11.19v3.56A3.25 3.25 0 0 1 18.75 18h-5.738L8 21.75a1.25 1.25 0 0 1-1.999-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3h6.772a6.5 6.5 0 0 0-.709 1.5H5.25A1.75 1.75 0 0 0 3.5 6.25v8.5c0 .966.784 1.75 1.75 1.75h2.249v3.75l5.015-3.75h6.236a1.75 1.75 0 0 0 1.75-1.75"></svg:path>`,
})
export class FluentCommentAdd24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
