import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentDismiss24FilledIcon],svg[fluent-comment-dismiss-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 6.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-7.146-2.354a.5.5 0 0 0-.708.708L16.793 6.5l-1.647 1.646a.5.5 0 0 0 .708.708L17.5 7.207l1.646 1.647a.5.5 0 0 0 .708-.708L18.207 6.5l1.647-1.646a.5.5 0 0 0-.708-.708L17.5 5.793zM17.5 13a6.48 6.48 0 0 0 4.5-1.81v3.56A3.25 3.25 0 0 1 18.75 18H13l-5 3.75c-.824.618-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3h6.772A6.5 6.5 0 0 0 17.5 13"></svg:path>`,
})
export class FluentCommentDismiss24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
