import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentBadge24FilledIcon],svg[fluent-comment-badge-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 1c.537 0 1.045-.12 1.5-.337v7.087A3.25 3.25 0 0 1 18.75 18H13l-5 3.75c-.824.618-2 .03-2-1V18h-.75A3.25 3.25 0 0 1 2 14.75v-8.5A3.25 3.25 0 0 1 5.25 3h12.087A3.5 3.5 0 0 0 20.5 8"></svg:path>`,
})
export class FluentCommentBadge24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
