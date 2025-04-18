import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineGroupMeetingCallIcon],svg[streamline-group-meeting-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.48 10.533a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283m-2.055 2.946a2.06 2.06 0 0 1 .267-.993a2.08 2.08 0 0 1 1.788-1.045a2.08 2.08 0 0 1 1.787 1.045c.172.303.263.645.267.993m4.991-2.946a1.141 1.141 0 1 0 0-2.283a1.141 1.141 0 0 0 0 2.283M8.47 13.479a2.06 2.06 0 0 1 .267-.993a2.08 2.08 0 0 1 1.787-1.045a2.06 2.06 0 0 1 2.055 2.037m-5.58-9.431a1.065 1.065 0 1 0 0-2.13a1.065 1.065 0 0 0 0 2.13M5.008 6.718c.003-.337.092-.668.258-.962A2.01 2.01 0 0 1 7 4.743c.71.001 1.383.394 1.733 1.013c.166.294.255.625.259.962"></svg:path><svg:path d="M11.782.545H2.218a.72.72 0 0 0-.718.718V6c0 .397.322.718.718.718h9.564A.72.72 0 0 0 12.5 6V1.263a.72.72 0 0 0-.718-.718"></svg:path></svg:g>`,
})
export class StreamlineGroupMeetingCallIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
