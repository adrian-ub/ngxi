import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAlarmIcon],svg[picon-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4c0-4 6-4 6 0S1 8 1 4m7-1.5Q8 0 5.5 0M0 2.5Q0 0 2.5 0M4 4l3 3l-1 1l-2-2l-2 2l-1-1"></svg:path>`,
})
export class PiconAlarmIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
