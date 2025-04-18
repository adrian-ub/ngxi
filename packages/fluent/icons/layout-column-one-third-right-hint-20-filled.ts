import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLayoutColumnOneThirdRightHint20FilledIcon],svg[fluent-layout-column-one-third-right-hint-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3a.5.5 0 0 1 0 1A1.5 1.5 0 0 0 4 5.5a.5.5 0 0 1-1 0m5-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5M3.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m0 6a.5.5 0 0 1 .5.5A1.5 1.5 0 0 0 5.5 16a.5.5 0 0 1 0 1A2.5 2.5 0 0 1 3 14.5a.5.5 0 0 1 .5-.5M8 16.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m4-13a.5.5 0 0 1 .5-.5H14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1.5a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class FluentLayoutColumnOneThirdRightHint20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
