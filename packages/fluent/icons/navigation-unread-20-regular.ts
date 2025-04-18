import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNavigationUnread20RegularIcon],svg[fluent-navigation-unread-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.994 4.42Q18 4.336 18 4.25a2.25 2.25 0 1 0-.048.464l.002-.01q.029-.14.04-.284M2.5 4h10.01a3.3 3.3 0 0 0 .077 1H2.5a.5.5 0 0 1 0-1M2 9.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m.5 4.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentNavigationUnread20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
