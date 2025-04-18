import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTriangle28FilledIcon],svg[fluent-triangle-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.967 4.158c-.857-1.542-3.075-1.542-3.933 0L3.069 20.285C2.142 21.952 3.347 24 5.254 24h17.493c1.906 0 3.111-2.048 2.185-3.715z"></svg:path>`,
})
export class FluentTriangle28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
