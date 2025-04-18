import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEditOff24FilledIcon],svg[fluent-edit-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 15.062l6.72 6.72a.75.75 0 0 0 1.06-1.061L3.28 2.22a.75.75 0 0 0-1.06 1.06L8.94 10l-5 5a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825zm5-5l-2.88 2.878l-5.06-5.06L13.938 5zm-3.11-7.015a3.578 3.578 0 1 1 5.061 5.06L20.059 9L15 3.94z"></svg:path>`,
})
export class FluentEditOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
