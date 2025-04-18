import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailUnread12FilledIcon],svg[fluent-mail-unread-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 4.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2M3.5 3h4.063a2 2 0 0 0 .593 1.981L6 5.951L2.037 4.169A1.5 1.5 0 0 1 3.5 3m2.705 3.956l3.237-1.457A2 2 0 0 0 10 5.437V7.5A1.5 1.5 0 0 1 8.5 9h-5A1.5 1.5 0 0 1 2 7.5V5.248l3.794 1.708a.5.5 0 0 0 .41 0"></svg:path>`,
})
export class FluentMailUnread12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
