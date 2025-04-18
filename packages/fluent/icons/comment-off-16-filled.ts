import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentOff16FilledIcon],svg[fluent-comment-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.293 12l2.853 2.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l.739.738A2.5 2.5 0 0 0 1 4.5v5A2.5 2.5 0 0 0 3.5 12H4v1.942a.98.98 0 0 0 1.625.738L8.688 12zM15 9.5c0 .916-.492 1.716-1.227 2.152L4.121 2H12.5A2.5 2.5 0 0 1 15 4.5z"></svg:path>`,
})
export class FluentCommentOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
