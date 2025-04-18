import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeAlarmIcon],svg[icomoon-free-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a7 7 0 1 0 0 14A7 7 0 0 0 8 2m0 12.625a5.624 5.624 0 1 1 0-11.25a5.624 5.624 0 1 1 0 11.25m6.606-10.138a3 3 0 0 0-4.98-3.321a8 8 0 0 1 4.98 3.322zM6.374 1.166a3 3 0 0 0-4.98 3.321a8 8 0 0 1 4.98-3.322z"></svg:path><svg:path fill="currentColor" d="M8 9V5H7v5h4V9z"></svg:path>`,
})
export class IcomoonFreeAlarmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
