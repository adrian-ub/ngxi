import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColumn24FilledIcon],svg[fluent-column-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 3.75A.75.75 0 0 1 3.25 3h.5A2.75 2.75 0 0 1 6.5 5.75v12.5A2.75 2.75 0 0 1 3.75 21h-.5a.75.75 0 0 1 0-1.5h.5c.69 0 1.25-.56 1.25-1.25V5.75c0-.69-.56-1.25-1.25-1.25h-.5a.75.75 0 0 1-.75-.75M10.75 3A2.75 2.75 0 0 0 8 5.75v12.5A2.75 2.75 0 0 0 10.75 21h2.5A2.75 2.75 0 0 0 16 18.25V5.75A2.75 2.75 0 0 0 13.25 3zm10 0a.75.75 0 0 1 0 1.5h-.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h.5a.75.75 0 0 1 0 1.5h-.5a2.75 2.75 0 0 1-2.75-2.75V5.75A2.75 2.75 0 0 1 20.25 3z"></svg:path>`,
})
export class FluentColumn24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
