import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChannelAdd20RegularIcon],svg[fluent-channel-add-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 4.5q-.154 0-.302.023A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v4.1a5.5 5.5 0 0 0-1-.393V5.5A1.5 1.5 0 0 0 14.5 4h-9c-.513 0-.966.258-1.237.65A2 2 0 0 0 3.5 4.5M9.207 16q.149.524.393 1H5.5A2.5 2.5 0 0 1 3 14.5V8.437a2 2 0 0 0 1 0V14.5A1.5 1.5 0 0 0 5.5 16zm.393-4q.276-.538.657-1H7.5a.5.5 0 0 0 0 1zM3.5 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m4 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V14h-1.5a.5.5 0 0 0 0 1H14v1.5a.5.5 0 0 0 1 0V15h1.5a.5.5 0 0 0 0-1H15z"></svg:path>`,
})
export class FluentChannelAdd20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
