import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadsetVr24FilledIcon],svg[fluent-headset-vr-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3.75A.75.75 0 0 1 9.75 3h4.5a.75.75 0 0 1 .75.75V5h3a4 4 0 0 1 4 4h.25a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75H22v2.5a4 4 0 0 1-4 4h-1.546a4 4 0 0 1-2.163-.635l-2.156-1.386a.25.25 0 0 0-.27 0l-2.156 1.386a4 4 0 0 1-2.164.635H6a4 4 0 0 1-4-4V14h-.25a.75.75 0 0 1-.75-.75v-3.5A.75.75 0 0 1 1.75 9H2a4 4 0 0 1 4-4h3zM12 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-6 2.25c0 .414.336.75.75.75h2.5a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0-.75.75m8.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentHeadsetVr24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
