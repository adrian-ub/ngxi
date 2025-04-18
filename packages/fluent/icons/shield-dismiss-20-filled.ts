import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentShieldDismiss20FilledIcon],svg[fluent-shield-dismiss-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.277 2.084a15.05 15.05 0 0 0 6.294 2.421A.5.5 0 0 1 17 5v4.5c0 3.891-2.307 6.73-6.82 8.467a.5.5 0 0 1-.36 0C5.308 16.23 3 13.39 3 9.5V5a.5.5 0 0 1 .43-.495a15.05 15.05 0 0 0 6.293-2.421a.5.5 0 0 1 .554 0M8.03 6.97a.75.75 0 0 0-1.06 1.06L8.94 10l-1.97 1.97a.75.75 0 1 0 1.06 1.06L10 11.06l1.97 1.97a.75.75 0 1 0 1.06-1.06L11.06 10l1.97-1.97a.75.75 0 0 0-1.06-1.06L10 8.94z"></svg:path>`,
})
export class FluentShieldDismiss20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
