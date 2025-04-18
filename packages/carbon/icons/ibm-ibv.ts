import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmIbvIcon],svg[carbon-ibm-ibv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 24c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7m0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5m15 1h-2V4h-9V2h9c1.103 0 2 .897 2 2z"></svg:path><svg:path fill="currentColor" d="M15 30C7.832 30 2 24.169 2 17S7.832 4 15 4v2C8.935 6 4 10.935 4 17s4.935 11 11 11s11-4.935 11-11v-1h2v1c0 7.169-5.832 13-13 13"></svg:path>`,
})
export class CarbonIbmIbvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
