import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMicRecord24FilledIcon],svg[fluent-mic-record-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 17.5c0 1.096.271 2.129.75 3.035v.715a.75.75 0 0 1-1.493.102l-.007-.102v-2.268a6.75 6.75 0 0 1-6.246-6.496L4 12.25v-.5a.75.75 0 0 1 1.493-.102l.007.102v.5a5.25 5.25 0 0 0 5.034 5.246l.216.004zm.175-1.504A6.51 6.51 0 0 1 15 11.498V6a4 4 0 0 0-8 0v6a4 4 0 0 0 4.175 3.996M20 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m3 0a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-9.5 0a4 4 0 1 0 8 0a4 4 0 0 0-8 0"></svg:path>`,
})
export class FluentMicRecord24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
