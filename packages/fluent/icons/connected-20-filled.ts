import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentConnected20FilledIcon],svg[fluent-connected-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4.5c0 .51-.152.983-.414 1.379L8.62 7.914A2.5 2.5 0 0 1 9.999 7.5c.51 0 .983.152 1.379.414l2.035-2.035a2.5 2.5 0 1 1 .707.707L12.086 8.62c.262.396.414.87.414 1.379c0 .51-.152.983-.414 1.379l2.035 2.035a2.5 2.5 0 1 1-.707.707l-2.035-2.035a2.5 2.5 0 0 1-1.379.414c-.51 0-.983-.152-1.379-.414L6.586 14.12a2.5 2.5 0 1 1-.707-.707l2.035-2.035A2.5 2.5 0 0 1 7.5 10c0-.51.152-.983.414-1.379L5.88 6.586A2.5 2.5 0 1 1 7 4.5"></svg:path>`,
})
export class FluentConnected20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
