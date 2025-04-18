import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismissSquareMultiple16FilledIcon],svg[fluent-dismiss-square-multiple-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.646 2.646a.5.5 0 0 1 .708 0L7 6.293l1.646-1.647a.5.5 0 1 1 .708.708L7.707 7l1.647 1.646a.5.5 0 1 1-.708.708L7 7.707L5.354 9.354a.5.5 0 1 1-.708-.708L6.293 7L4.646 5.354a.5.5 0 0 1 0-.708M13 10.5a2.5 2.5 0 0 1-2.5 2.5H3.268A2 2 0 0 0 5 14h5.5a3.5 3.5 0 0 0 3.5-3.5V5a2 2 0 0 0-1-1.732z"></svg:path>`,
})
export class FluentDismissSquareMultiple16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
