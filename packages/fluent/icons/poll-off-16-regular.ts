import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPollOff16RegularIcon],svg[fluent-poll-off-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6.707L1.146 1.854a.5.5 0 1 1 .708-.708l13 13a.5.5 0 0 1-.708.708l-.13-.13A2 2 0 0 1 11 13v-1.294l-1-1V13a2 2 0 1 1-4 0zm3 3l-2-2V13a1 1 0 1 0 2 0zm3 3V13a1 1 0 0 0 1.259.966zM9 3v3.879l1 1V3a2 2 0 1 0-4 0v.879l1 1V3a1 1 0 0 1 2 0m2 5.879l1 1V7a1 1 0 1 1 2 0v4.879l1 1V7a2 2 0 1 0-4 0zM3 7a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0V9a2 2 0 0 0-2-2m1 6a1 1 0 1 1-2 0V9a1 1 0 0 1 2 0z"></svg:path>`,
})
export class FluentPollOff16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
