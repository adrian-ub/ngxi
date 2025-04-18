import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConferenceRoom28FilledIcon],svg[fluent-conference-room-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.894 2.014l11.5 2.25A.75.75 0 0 1 24 5v18a.75.75 0 0 1-.606.736l-11.5 2.25A.75.75 0 0 1 11 25.25V2.75a.75.75 0 0 1 .894-.736M15 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5-8.5v19H4.75a.75.75 0 0 1-.743-.648L4 22.75V5.25a.75.75 0 0 1 .648-.743L4.75 4.5z"></svg:path>`,
})
export class FluentConferenceRoom28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
