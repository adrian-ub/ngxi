import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConferenceRoom48FilledIcon],svg[fluent-conference-room-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.503 7.776l14.5 3c.58.12.997.632.997 1.224v24a1.25 1.25 0 0 1-.997 1.224l-14.5 3A1.25 1.25 0 0 1 21 39.002V9a1.25 1.25 0 0 1 1.503-1.225M18 10l.128 27.994l-.128.007h-6.75a1.25 1.25 0 0 1-1.243-1.123L10 36.751v-25.5c0-.648.492-1.18 1.122-1.244L11.25 10zm8.5 12.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class FluentConferenceRoom48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
