import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentAdd28FilledIcon],svg[fluent-comment-add-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 7.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m-6-4a.5.5 0 0 0-1 0V7h-3.5a.5.5 0 0 0 0 1H20v3.5a.5.5 0 0 0 1 0V8h3.5a.5.5 0 0 0 0-1H21zM20.5 15a7.48 7.48 0 0 0 5.5-2.4v4.65A3.75 3.75 0 0 1 22.25 21h-5.941l-6.535 4.715C8.616 26.55 7 25.723 7 24.295V21H5.75A3.75 3.75 0 0 1 2 17.25V6.75A3.75 3.75 0 0 1 5.75 3h8.75a7.5 7.5 0 0 0 6 12"></svg:path>`,
})
export class FluentCommentAdd28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
