import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentWindow28FilledIcon],svg[fluent-window-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3h14.5C23.28 3 25 4.712 25 6.75v14.5A3.75 3.75 0 0 1 21.25 25H6.75A3.75 3.75 0 0 1 3 21.25V6.75C3 4.712 4.72 3 6.75 3M4.5 21.25a2.25 2.25 0 0 0 2.25 2.25h14.5a2.25 2.25 0 0 0 2.25-2.25V9.5h-19z"></svg:path>`,
})
export class FluentWindow28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
