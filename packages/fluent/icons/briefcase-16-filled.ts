import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBriefcase16FilledIcon],svg[fluent-briefcase-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3.5V5h4V3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M5 5V3.5A1.5 1.5 0 0 1 6.5 2h3A1.5 1.5 0 0 1 11 3.5V5h1a2 2 0 0 1 2 2v.5A1.5 1.5 0 0 1 12.5 9H9v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V9H3.5A1.5 1.5 0 0 1 2 7.5V7a2 2 0 0 1 2-2zM2 9.5V12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9.5c-.418.314-.937.5-1.5.5H9v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V10H3.5A2.5 2.5 0 0 1 2 9.5"></svg:path>`,
})
export class FluentBriefcase16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
