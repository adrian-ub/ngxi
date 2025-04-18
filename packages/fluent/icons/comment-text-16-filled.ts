import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentText16FilledIcon],svg[fluent-comment-text-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.5A2.5 2.5 0 0 1 3.5 2h9A2.5 2.5 0 0 1 15 4.5v5a2.5 2.5 0 0 1-2.5 2.5H8.688l-3.063 2.68A.98.98 0 0 1 4 13.942V12h-.5A2.5 2.5 0 0 1 1 9.5zM7.5 8h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1m-2-1h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1m-2 2a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm7 1h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1"></svg:path>`,
})
export class FluentCommentText16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
