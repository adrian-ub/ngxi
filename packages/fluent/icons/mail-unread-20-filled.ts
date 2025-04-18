import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailUnread20FilledIcon],svg[fluent-mail-unread-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-13-3h9.535Q14 3.245 14 3.5a3.5 3.5 0 0 0 1.755 3.035L10 9.92L2.015 5.223A2.5 2.5 0 0 1 4.5 3m5.754 7.931l6.742-3.967a3.5 3.5 0 0 0 1.004 0V13.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 13.5V6.373l7.747 4.558a.5.5 0 0 0 .507 0"></svg:path>`,
})
export class FluentMailUnread20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
