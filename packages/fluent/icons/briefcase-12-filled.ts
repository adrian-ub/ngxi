import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBriefcase12FilledIcon],svg[fluent-briefcase-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2.25V3h2v-.75A.25.25 0 0 0 6.75 2h-1.5a.25.25 0 0 0-.25.25M4 3v-.75C4 1.56 4.56 1 5.25 1h1.5C7.44 1 8 1.56 8 2.25V3h1a2 2 0 0 1 2 2v.5A1.5 1.5 0 0 1 9.5 7H7v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V7H2.5A1.5 1.5 0 0 1 1 5.5V5a2 2 0 0 1 2-2zM1 7.5V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7.5c-.418.314-.937.5-1.5.5H7v.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V8H2.5A2.5 2.5 0 0 1 1 7.5"></svg:path>`,
})
export class FluentBriefcase12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
