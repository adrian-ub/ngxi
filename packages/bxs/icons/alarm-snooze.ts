import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsAlarmSnoozeIcon],svg[bxs-alarm-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.284 3.707l1.412-1.416l3.01 3l-1.413 1.417zm-10.586 0l-2.99 2.999L2.29 5.294l2.99-3zM12 4c-4.878 0-9 4.121-9 9s4.122 9 9 9s9-4.121 9-9s-4.121-9-9-9m4 13H8.131l4-6H8V9h7.868l-1.035 1.554l-.001.001L11.869 15H16z"></svg:path>`,
})
export class BxsAlarmSnoozeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
