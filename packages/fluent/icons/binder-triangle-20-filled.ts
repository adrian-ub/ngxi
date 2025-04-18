import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBinderTriangle20FilledIcon],svg[fluent-binder-triangle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2a2 2 0 0 0-2 2h-.5a.5.5 0 0 0 0 1H3v3h-.5a.5.5 0 0 0 0 1H3v3h-.5a.5.5 0 0 0 0 1H3a2 2 0 0 0 2 2h1.354L14 5.896V4a2 2 0 0 0-2-2zm1.5 4h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1m10.173-1.73c.45-.537 1.324-.219 1.324.482V16a2 2 0 0 1-2 2H6.751a.75.75 0 0 1-.574-1.233zm-1.672 9.985l.002-2.645a.25.25 0 0 0-.441-.161l-2.64 3.145a.25.25 0 0 0 .192.41h2.137a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class FluentBinderTriangle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
