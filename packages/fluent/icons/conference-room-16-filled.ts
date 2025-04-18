import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConferenceRoom16FilledIcon],svg[fluent-conference-room-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.183 2.113a.5.5 0 0 1 .415-.103l5 1A.5.5 0 0 1 13 3.5v8.997a.5.5 0 0 1-.402.49l-5 1a.5.5 0 0 1-.598-.49V2.5m3 5.498a.5.5 0 1 0-1 0a.5.5 0 0 0 1 0M6 3H3.5a.5.5 0 0 0-.5.5v8.997a.5.5 0 0 0 .5.5H6zm1.183-.887A.5.5 0 0 0 7 2.5Z"></svg:path>`,
})
export class FluentConferenceRoom16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
