import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentError16RegularIcon],svg[fluent-comment-error-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.6 3H3.5A1.5 1.5 0 0 0 2 4.5v5A1.5 1.5 0 0 0 3.5 11H5v2.898L8.312 11H12.5a1.5 1.5 0 0 0 1.477-1.239A5.5 5.5 0 0 0 15 8.664V9.5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5v-5A2.5 2.5 0 0 1 3.5 2h2.757A5.5 5.5 0 0 0 5.6 3m4.9 7a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9M10 3.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0zm1.125 4a.625.625 0 1 1-1.25 0a.625.625 0 0 1 1.25 0"></svg:path>`,
})
export class FluentCommentError16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
