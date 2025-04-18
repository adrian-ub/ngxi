import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommentMultiple20FilledIcon],svg[fluent-comment-multiple-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7.5A3.5 3.5 0 0 0 13.5 4h-9c.456-.607 1.182-1 2-1h7A4.5 4.5 0 0 1 18 7.5v4c0 .818-.393 1.544-1 2zm-15 0A2.5 2.5 0 0 1 4.5 5h9A2.5 2.5 0 0 1 16 7.5v6a2.5 2.5 0 0 1-2.5 2.5H9.057L6.59 17.803A1 1 0 0 1 5 16.995V16h-.5A2.5 2.5 0 0 1 2 13.5z"></svg:path>`,
})
export class FluentCommentMultiple20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
