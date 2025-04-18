import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConferenceRoom24FilledIcon],svg[fluent-conference-room-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.598 2.01l9 2A.5.5 0 0 1 20 4.5v15a.5.5 0 0 1-.402.49l-9 2A.5.5 0 0 1 10 21.5v-19a.5.5 0 0 1 .598-.49M9 4v16H4.75a.75.75 0 0 1-.743-.648L4 19.25V4.75a.75.75 0 0 1 .648-.743L4.75 4zm4 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class FluentConferenceRoom24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
