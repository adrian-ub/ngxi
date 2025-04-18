import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentEdit24FilledIcon],svg[fluent-comment-edit-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25v4.674a3.286 3.286 0 0 0-4.607.038l-5.903 5.903a3.7 3.7 0 0 0-.97 1.712l-.394 1.578L8 21.75c-.824.618-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75zm16.1 5.42l-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 18.1 11.67"></svg:path>`,
})
export class FluentCommentEdit24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
