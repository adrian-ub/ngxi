import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrownSubtract24FilledIcon],svg[fluent-crown-subtract-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.457 6.37a2 2 0 1 0-2.913 0L7.918 9.65a.25.25 0 0 1-.307.068l-2.65-1.326A2 2 0 1 0 2.556 9.95l1.804 9.623A1.75 1.75 0 0 0 6.08 21h5.942a6.5 6.5 0 0 1 9.028-8.946l.394-2.104a2 2 0 1 0-2.405-1.558l-2.651 1.326a.25.25 0 0 1-.307-.068zM23 17.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-9 0a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5"></svg:path>`,
})
export class FluentCrownSubtract24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
