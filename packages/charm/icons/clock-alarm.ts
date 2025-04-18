import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmClockAlarmIcon],svg[charm-clock-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m11.75 1.75l2.5 2m-10-2l-2.5 2m10.5 9.5l1 1m-9.5-1l-1 1m5.5-7.5v2.5l-1.5 1"></svg:path><svg:circle cx="8" cy="9" r="5.25"></svg:circle></svg:g>`,
})
export class CharmClockAlarmIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
