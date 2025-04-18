import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSyncOff16FilledIcon],svg[fluent-sync-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 8A6 6 0 0 1 2 8h3.877l-.847 2.33a.5.5 0 0 0 .94.34l2-5.5a.5.5 0 1 0-.94-.34L6.24 7H2.084a6.002 6.002 0 0 1 11.834 0h-3.612l.665-1.83a.5.5 0 1 0-.94-.34l-2 5.5a.5.5 0 0 0 .94.34L9.941 8z"></svg:path>`,
})
export class FluentSyncOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
