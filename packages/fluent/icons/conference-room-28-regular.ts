import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConferenceRoom28RegularIcon],svg[fluent-conference-room-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.894 2.014l11.5 2.25A.75.75 0 0 1 24 5v18a.75.75 0 0 1-.606.736l-11.5 2.25A.75.75 0 0 1 11 25.25V2.75a.75.75 0 0 1 .894-.736m.606 1.647V24.34l10-1.956V5.618zm-2.5.84V6H5.5v16H10v1.5H4.75a.75.75 0 0 1-.743-.649L4 22.75V5.25a.75.75 0 0 1 .648-.743L4.75 4.5zm5 8.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class FluentConferenceRoom28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
