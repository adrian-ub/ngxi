import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentQuestionCircle20RegularIcon],svg[fluent-question-circle-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m0 1a7 7 0 1 0 0 14a7 7 0 0 0 0-14m0 10.5a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m0-8a2.5 2.5 0 0 1 1.651 4.377l-.154.125l-.219.163l-.087.072a2 2 0 0 0-.156.149c-.339.36-.535.856-.535 1.614a.5.5 0 0 1-1 0c0-1.012.293-1.752.805-2.298a3 3 0 0 1 .356-.323l.247-.185l.118-.1A1.5 1.5 0 1 0 8.5 8a.5.5 0 0 1-1 .001A2.5 2.5 0 0 1 10 5.5"></svg:path>`,
})
export class FluentQuestionCircle20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
