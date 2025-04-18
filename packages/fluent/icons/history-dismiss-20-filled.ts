import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHistoryDismiss20FilledIcon],svg[fluent-history-dismiss-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4a6 6 0 0 1 5.946 5.192c.558.152 1.08.389 1.553.697A7.5 7.5 0 0 0 5 4.409V3.25a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5H6.031A5.98 5.98 0 0 1 10 4m.257 7a5.5 5.5 0 0 1 1.949-1.5H10.5V6.25a.75.75 0 0 0-1.5 0v4c0 .414.336.75.75.75zm-.368 6.5a5.5 5.5 0 0 1-.697-1.554a6 6 0 0 1-5.188-6.169a.75.75 0 1 0-1.499-.054A7.5 7.5 0 0 0 9.89 17.5m9.111-3a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.646-1.146a.5.5 0 0 0-.708-.708L14.5 13.793l-1.146-1.147a.5.5 0 0 0-.708.708l1.147 1.146l-1.147 1.146a.5.5 0 0 0 .708.708l1.146-1.147l1.146 1.147a.5.5 0 0 0 .708-.708L15.207 14.5z"></svg:path>`,
})
export class FluentHistoryDismiss20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
