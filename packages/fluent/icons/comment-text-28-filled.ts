import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentText28FilledIcon],svg[fluent-comment-text-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.75A3.75 3.75 0 0 1 5.75 3h16.5A3.75 3.75 0 0 1 26 6.75v10.5A3.75 3.75 0 0 1 22.25 21h-5.941l-6.535 4.715C8.616 26.55 7 25.723 7 24.295V21H5.75A3.75 3.75 0 0 1 2 17.25zm10.25 6.75h9a.75.75 0 0 0 0-1.5h-9a.75.75 0 0 0 0 1.5m-3-1.5h-2.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5m-2.5 3.5a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm12 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class FluentCommentText28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
