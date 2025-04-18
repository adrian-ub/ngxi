import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmOffFilledIcon],svg[tdesign-alarm-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.004.59L2 .586L.586 2l2 2l-2.5 2.5L1.5 7.914l2.5-2.5l.725.725A9.97 9.97 0 0 0 2 13c0 5.523 4.477 10 10 10a9.97 9.97 0 0 0 6.861-2.725l3.14 3.14l1.41-1.41L2 .594zm19.184 16.364A10 10 0 0 0 22 13c0-5.523-4.477-10-10-10a10 10 0 0 0-3.954.812zM18.5 1.086L23.914 6.5L22.5 7.914L17.086 2.5z"></svg:path>`,
})
export class TdesignAlarmOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
