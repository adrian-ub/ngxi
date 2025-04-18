import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentText32FilledIcon],svg[fluent-comment-text-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7.5A4.5 4.5 0 0 1 6.5 3h19A4.5 4.5 0 0 1 30 7.5v12a4.5 4.5 0 0 1-4.5 4.5h-7.631l-6.571 5.603C9.999 30.71 8 29.787 8 28.08V24H6.5A4.5 4.5 0 0 1 2 19.5zM15 15h9a1 1 0 1 0 0-2h-9a1 1 0 1 0 0 2m-4-2H8a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2m-3 4a1 1 0 1 0 0 2h9a1 1 0 1 0 0-2zm13 2h3a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2"></svg:path>`,
})
export class FluentCommentText32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
