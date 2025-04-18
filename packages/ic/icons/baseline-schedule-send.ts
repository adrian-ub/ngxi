import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineScheduleSendIcon],svg[ic-baseline-schedule-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 12.5H15v4l3 2l.75-1.23l-2.25-1.52zM16 9L2 3v7l9 2l-9 2v7l7.27-3.11C10.09 20.83 12.79 23 16 23c3.86 0 7-3.14 7-7s-3.14-7-7-7m0 12c-2.75 0-4.98-2.22-5-4.97v-.07a5.01 5.01 0 0 1 5-4.97c2.76 0 5 2.24 5 5S18.76 21 16 21"></svg:path>`,
})
export class IcBaselineScheduleSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
