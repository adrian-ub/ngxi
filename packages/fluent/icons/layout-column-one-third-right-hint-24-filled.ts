import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnOneThirdRightHint24FilledIcon],svg[fluent-layout-column-one-third-right-hint-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 4.5A1.75 1.75 0 0 0 4.5 6.25a.75.75 0 0 1-1.5 0A3.25 3.25 0 0 1 6.25 3a.75.75 0 0 1 0 1.5M9 3.75A.75.75 0 0 1 9.75 3h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 9 3.75M3.75 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 3.75 9m0 8a.75.75 0 0 1 .75.75c0 .966.784 1.75 1.75 1.75a.75.75 0 0 1 0 1.5A3.25 3.25 0 0 1 3 17.75a.75.75 0 0 1 .75-.75M9 20.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75m5-16.5a.75.75 0 0 1 .75-.75h3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21h-3a.75.75 0 0 1-.75-.75z"></svg:path>`,
})
export class FluentLayoutColumnOneThirdRightHint24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
