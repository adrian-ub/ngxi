import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSelectAllOff20FilledIcon],svg[fluent-select-all-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm4.99 11a3 3 0 0 1-2.236-1h6.736a3.5 3.5 0 0 0 3.5-3.5v-1.201q.008-.15.008-.299V5.772c.61.549.992 1.344.992 2.228v4.5a4.5 4.5 0 0 1-4.5 4.5z"></svg:path>`,
})
export class FluentSelectAllOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
