import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNavigationUnread24FilledIcon],svg[fluent-navigation-unread-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 8.5a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5M15.713 7a3.74 3.74 0 0 1-.138-2H3l-.117.007A1 1 0 0 0 3 7zM21 17H3l-.117.007A1 1 0 0 0 3 19h18l.117-.007A1 1 0 0 0 21 17M3 11l18-.002a1 1 0 0 1 .117 1.993l-.117.007L3 13a1 1 0 0 1-.117-1.993z"></svg:path>`,
})
export class FluentNavigationUnread24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
