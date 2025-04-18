import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudOff32FilledIcon],svg[fluent-cloud-off-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.573 24.987l4.72 4.72a1 1 0 0 0 1.414-1.414l-26-26a1 1 0 0 0-1.414 1.414l6.575 6.575a8.7 8.7 0 0 0-.81 2.765C3.93 13.47 2 16.644 2 19c0 1.145.284 2.664 1.373 3.908C4.485 24.18 6.293 25 9 25h14q.291 0 .573-.013m4.583-1.589q-.327.285-.704.519L11.084 7.549c1.245-.948 2.878-1.55 4.916-1.55c1.7 0 3.682.562 5.259 1.852c1.42 1.162 2.472 2.887 2.697 5.206c1.377.165 2.713.683 3.78 1.507C29.063 15.59 30 17.114 30 19c0 1.753-.583 3.303-1.844 4.398"></svg:path>`,
})
export class FluentCloudOff32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
