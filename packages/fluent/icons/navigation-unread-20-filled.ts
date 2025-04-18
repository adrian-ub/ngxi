import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNavigationUnread20FilledIcon],svg[fluent-navigation-unread-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.978 4.568q.021-.156.022-.318a2.25 2.25 0 1 0-.277 1.082l.005-.01c.125-.23.212-.484.25-.754M2.75 4h9.76a3.3 3.3 0 0 0 .24 1.5h-10a.75.75 0 0 1 0-1.5M2 9.75A.75.75 0 0 1 2.75 9h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.75M2.75 14a.75.75 0 0 0 0 1.5h14.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentNavigationUnread20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
