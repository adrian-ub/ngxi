import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBook28FilledIcon],svg[fluent-book-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 2A3.75 3.75 0 0 0 5 5.75v16.5A3.75 3.75 0 0 0 8.75 26h13.5a.75.75 0 0 0 0-1.5H8.75a2.25 2.25 0 0 1-2.236-2H21.5A1.5 1.5 0 0 0 23 21V5.75A3.75 3.75 0 0 0 19.25 2zM8.5 6.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v1.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25z"></svg:path>`,
})
export class FluentBook28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
