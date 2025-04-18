import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentExpandUpLeft24FilledIcon],svg[fluent-expand-up-left-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.75a.75.75 0 0 0-.75-.75h-6.5a.75.75 0 0 0-.75.75v6.5a.75.75 0 0 0 1.5 0V5.56l5.22 5.22a.75.75 0 0 0 1.06-1.06L5.56 4.5h4.69a.75.75 0 0 0 .75-.75m6.75.75c.966 0 1.75.784 1.75 1.75V12h-4.75A2.75 2.75 0 0 0 12 14.75v4.75H6.25a1.75 1.75 0 0 1-1.75-1.75v-4a.75.75 0 0 0-1.5 0v4A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3h-4a.75.75 0 1 0 0 1.5z"></svg:path>`,
})
export class FluentExpandUpLeft24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
