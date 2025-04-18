import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConferenceRoom20RegularIcon],svg[fluent-conference-room-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.487 10a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0M9.605 2.014A.5.5 0 0 0 9 2.502v15a.5.5 0 0 0 .605.489l7-1.501a.5.5 0 0 0 .394-.49V4a.5.5 0 0 0-.395-.488zM10 16.883V3.12l6 1.285v11.192zm-1.998.115v-1H4V4.003h4.002v-1H3.5a.5.5 0 0 0-.5.5v12.995a.5.5 0 0 0 .5.5z"></svg:path>`,
})
export class FluentConferenceRoom20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
