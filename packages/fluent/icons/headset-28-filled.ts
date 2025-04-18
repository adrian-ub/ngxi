import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHeadset28FilledIcon],svg[fluent-headset-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a9 9 0 0 1 8.996 8.735L23 11v5.254A2.75 2.75 0 0 1 20.418 19l-.168.005h-2.996a.75.75 0 0 1-.743-.648l-.007-.102V12.25a.75.75 0 0 1 .648-.743l.102-.007h3.996q.128 0 .251.018L21.5 11a7.5 7.5 0 0 0-14.996-.243L6.5 11v.5h4.246a.75.75 0 0 1 .743.648l.007.102v6.004a.75.75 0 0 1-.648.743l-.102.007H7.75c-.45 0-.875-.108-1.25-.3v1.546a2.25 2.25 0 0 0 2.096 2.245l.154.005h2.291a3.001 3.001 0 1 1 .13 1.5H8.75a3.75 3.75 0 0 1-3.745-3.55L5 20.25V11a9 9 0 0 1 9-9m0 19.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class FluentHeadset28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
