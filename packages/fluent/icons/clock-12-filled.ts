import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentClock12FilledIcon],svg[fluent-clock-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1a5 5 0 1 1 0 10A5 5 0 0 1 6 1m-.5 2.5A.5.5 0 0 0 5 4v2.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 0-1H6V4a.5.5 0 0 0-.5-.5"></svg:path>`,
})
export class FluentClock12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
