import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCookies32FilledIcon],svg[fluent-cookies-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14q0-.852-.1-1.68a1 1 0 0 0-1.75-.534a3.5 3.5 0 0 1-6.127-2.695a1 1 0 0 0-.89-1.11a3.5 3.5 0 0 1-2.032-6.03a1 1 0 0 0-.501-1.71A14 14 0 0 0 16 2m0 15.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M12.5 21a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M9 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3M21.5 23a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"></svg:path>`,
})
export class FluentCookies32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
