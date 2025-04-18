import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBluetoothConnected20FilledIcon],svg[fluent-bluetooth-connected-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.28 2.22A.75.75 0 0 0 9 2.75v5.674L6.223 6.168a.75.75 0 1 0-.946 1.164L8.561 10l-3.284 2.668a.75.75 0 0 0 .946 1.164L9 11.576v5.674a.75.75 0 0 0 1.28.53l4-4a.75.75 0 0 0-.057-1.112L10.939 10l3.284-2.668a.75.75 0 0 0 .057-1.112zm.22 13.22v-3.864l2.132 1.732zm2.132-8.748L10.5 8.424V4.561zM4 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m13 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class FluentBluetoothConnected20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
