import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBriefcase20FilledIcon],svg[fluent-briefcase-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V3.75C7 2.784 7.784 2 8.75 2h2.5c.966 0 1.75.784 1.75 1.75V5h1.5A2.5 2.5 0 0 1 17 7.5v1a1.5 1.5 0 0 1-1.5 1.5H11v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.5H4.5A1.5 1.5 0 0 1 3 8.5v-1A2.5 2.5 0 0 1 5.5 5zm1 0h4V3.75a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75zm-5 5.5v3A2.5 2.5 0 0 0 5.5 16h9a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 1-1.5.5H11v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V11H4.5a2.5 2.5 0 0 1-1.5-.5"></svg:path>`,
})
export class FluentBriefcase20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
