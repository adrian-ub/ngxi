import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggAlarmIcon],svg[gg-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5.459 2L1 6.015L2.338 7.5l4.46-4.015zM11 8h2v4h3v2h-5z"></svg:path><svg:path fill-rule="evenodd" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m2 0a7 7 0 1 1 14 0a7 7 0 0 1-14 0" clip-rule="evenodd"></svg:path><svg:path d="M18.541 2L23 6.015L21.662 7.5l-4.46-4.015z"></svg:path></svg:g>`,
})
export class GgAlarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
