import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentScreenshot28RegularIcon],svg[fluent-screenshot-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25zm4.25-.25A2.25 2.25 0 0 0 6.5 8.75v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 1 8.75 8h3a.75.75 0 0 0 0-1.5zm7.5 0a.75.75 0 0 0 0 1.5h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 0 1.5 0v-3a2.25 2.25 0 0 0-2.25-2.25zM8 16.25a.75.75 0 0 0-1.5 0v3a2.25 2.25 0 0 0 2.25 2.25h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 1-.75-.75zm13.5 0a.75.75 0 0 0-1.5 0v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 0 0 1.5h3a2.25 2.25 0 0 0 2.25-2.25z"></svg:path>`,
})
export class FluentScreenshot28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
