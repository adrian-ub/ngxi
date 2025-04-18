import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRemote16FilledIcon],svg[fluent-remote-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.796 3.264a.75.75 0 1 0-1.092-1.028l-4 4.25a.75.75 0 0 0 0 1.028l4 4.25a.75.75 0 1 0 1.092-1.028L10.28 7zm-10.5.972a.75.75 0 1 0-1.092 1.028L5.72 9l-3.516 3.736a.75.75 0 1 0 1.092 1.028l4-4.25a.75.75 0 0 0 0-1.028z"></svg:path>`,
})
export class FluentRemote16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
