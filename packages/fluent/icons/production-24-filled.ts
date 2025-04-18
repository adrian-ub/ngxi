import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentProduction24FilledIcon],svg[fluent-production-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 5.25c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v2.5A1.75 1.75 0 0 1 8.75 9.5h-2.5A1.75 1.75 0 0 1 4.5 7.75zM15.25 3.5a1.75 1.75 0 0 0-1.75 1.75v2.5c0 .966.784 1.75 1.75 1.75h2.5a1.75 1.75 0 0 0 1.75-1.75v-2.5a1.75 1.75 0 0 0-1.75-1.75zM15 5.25a.25.25 0 0 1 .25-.25h2.5a.25.25 0 0 1 .25.25v2.5a.25.25 0 0 1-.25.25h-2.5a.25.25 0 0 1-.25-.25zM2 16a4.5 4.5 0 0 1 4.5-4.5h11a4.5 4.5 0 1 1 0 9h-11A4.5 4.5 0 0 1 2 16m6.5 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m5 0a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m3.5 1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class FluentProduction24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
