import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmOffIcon],svg[tdesign-alarm-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.086 6.5l2.5-2.5l-2-2L2 .586l2 2l1.5-1.5L6.914 2.5L5.414 4l18 18L22 23.414l-3.139-3.139A9.97 9.97 0 0 1 12.001 23C6.476 23 2 18.523 2 13a9.97 9.97 0 0 1 2.724-6.861L4 5.414l-2.5 2.5zM6.14 7.554A8 8 0 0 0 17.446 18.86zm2.421-4l.97-.246A10 10 0 0 1 12 3c5.523 0 10 4.477 10 10c0 .851-.107 1.679-.308 2.47l-.246.969l-1.938-.493l.246-.969a8 8 0 0 0-9.731-9.731l-.97.246zm9.94-2.468L23.913 6.5L22.5 7.914L17.086 2.5z"></svg:path>`,
})
export class TdesignAlarmOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
