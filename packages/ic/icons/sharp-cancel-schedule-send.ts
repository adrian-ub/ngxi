import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCancelScheduleSendIcon],svg[ic-sharp-cancel-schedule-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 9c-.42 0-.83.04-1.24.11L1.01 3L1 10l9 2l-9 2l.01 7l8.07-3.46C9.59 21.19 12.71 24 16.5 24c4.14 0 7.5-3.36 7.5-7.5S20.64 9 16.5 9m0 13c-3.03 0-5.5-2.47-5.5-5.5s2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5s-2.47 5.5-5.5 5.5"></svg:path><svg:path fill="currentColor" d="m18.27 14.03l-1.77 1.76l-1.77-1.76l-.7.7l1.76 1.77l-1.76 1.77l.7.7l1.77-1.76l1.77 1.76l.7-.7l-1.76-1.77l1.76-1.77z"></svg:path>`,
})
export class IcSharpCancelScheduleSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
