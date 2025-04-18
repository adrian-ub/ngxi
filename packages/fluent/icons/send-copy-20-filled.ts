import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSendCopy20FilledIcon],svg[fluent-send-copy-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.47 2.22a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1-1.06 1.06L9.75 4.56v6.69a.75.75 0 0 1-1.5 0V4.56L7.03 5.78a.75.75 0 0 1-1.06-1.06zM5.568 16.5A2 2 0 0 0 7.505 18h5.5a4.5 4.5 0 0 0 4.5-4.5v-2.25a.75.75 0 0 0-1.5 0v2.25a3 3 0 0 1-3 3zM4.5 8.75a.75.75 0 0 0-1.5 0v4.75a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8.75a.75.75 0 0 0-1.5 0v4.75a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class FluentSendCopy20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
