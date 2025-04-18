import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentOff28FilledIcon],svg[fluent-comment-off-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l.848.849A3.74 3.74 0 0 0 2 6.75v10.5A3.75 3.75 0 0 0 5.75 21H7v3.296c0 1.427 1.616 2.254 2.774 1.419L16.309 21h3.63l4.78 4.78a.75.75 0 0 0 1.061-1.06zM6.182 3l17.65 17.65A3.75 3.75 0 0 0 26 17.25V6.75A3.75 3.75 0 0 0 22.25 3z"></svg:path>`,
})
export class FluentCommentOff28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
