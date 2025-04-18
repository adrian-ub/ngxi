import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignAlarmIcon],svg[tdesign-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.914 2.5L1.5 7.914L.086 6.5L5.5 1.086zM18.5 1.086L23.914 6.5L22.5 7.914L17.086 2.5zM12 5a8 8 0 1 0 0 16a8 8 0 0 0 0-16M2 13C2 7.477 6.477 3 12 3s10 4.477 10 10s-4.477 10-10 10S2 18.523 2 13m11-5.5v5.086L16.414 16L15 17.414l-4-4V7.5z"></svg:path>`,
})
export class TdesignAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
