import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentMultiple16FilledIcon],svg[fluent-comment-multiple-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10.732V6a3 3 0 0 0-3-3H3.268A2 2 0 0 1 5 2h6a4 4 0 0 1 4 4v3a2 2 0 0 1-1 1.732M1 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7.073l-2.485 1.807A1 1 0 0 1 3 13.998V13a2 2 0 0 1-2-2z"></svg:path>`,
})
export class FluentCommentMultiple16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
