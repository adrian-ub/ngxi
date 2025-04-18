import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimerOff24FilledIcon],svg[fluent-timer-off-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.28 2.22a.75.75 0 1 0-1.06 1.06l3.993 3.994a8.5 8.5 0 1 0 12.013 12.013l2.493 2.494a.75.75 0 0 0 1.061-1.061zm9.336 11.457a.75.75 0 0 1-1.36-.325l-.006-.102v-.94zm.134-4.927v.818l7.128 7.129A8.5 8.5 0 0 0 8.803 5.622l2.634 2.633a.75.75 0 0 1 1.306.393zm6.42-3.627l.082.061l1.149 1a.75.75 0 0 1-.904 1.193l-.081-.061l-1.149-1a.75.75 0 0 1 .903-1.193M14.25 2.5a.75.75 0 0 1 .102 1.493L14.25 4h-4.5a.75.75 0 0 1-.102-1.493L9.75 2.5z"></svg:path>`,
})
export class FluentTimerOff24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
