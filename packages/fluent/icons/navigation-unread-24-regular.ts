import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNavigationUnread24RegularIcon],svg[fluent-navigation-unread-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 8.5a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m-3.674-1.997a3.8 3.8 0 0 1-.002-1.5H2.752l-.102.007a.75.75 0 0 0 .102 1.493zM21.253 18h-18.5l-.102.007a.75.75 0 0 0 .102 1.493h18.5l.102-.007A.75.75 0 0 0 21.253 18m-18.5-6.497h18.5a.75.75 0 0 1 .102 1.493l-.102.007h-18.5a.75.75 0 0 1-.102-1.493z"></svg:path>`,
})
export class FluentNavigationUnread24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
