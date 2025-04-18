import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagClock24RegularIcon],svg[fluent-flag-clock-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 2.998a.75.75 0 0 0-.75.75V21.25l.007.102A.75.75 0 0 0 3.75 22l.102-.007a.75.75 0 0 0 .648-.743V16.5h6.576q.123-.786.422-1.5H4.5V4.499h14.254L15.152 9.3a.75.75 0 0 0 0 .9l.75.999a6.5 6.5 0 0 1 1.727-.197l-.94-1.252l4.165-5.55a.75.75 0 0 0-.6-1.2zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentFlagClock24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
