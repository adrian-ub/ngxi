import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCommunication16FilledIcon],svg[fluent-communication-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.5a5.5 5.5 0 0 0-3.89 9.387a.75.75 0 1 1-1.062 1.06a7 7 0 1 1 9.904 0a.75.75 0 1 1-1.061-1.06A5.5 5.5 0 0 0 8 3.5m0 4a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M5.25 9a2.75 2.75 0 1 1 4.696 1.943a.75.75 0 0 0 1.062 1.06a4.25 4.25 0 1 0-6.015 0a.75.75 0 1 0 1.06-1.06A2.74 2.74 0 0 1 5.25 9"></svg:path>`,
})
export class FluentCommunication16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
