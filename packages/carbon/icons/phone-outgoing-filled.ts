import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneOutgoingFilledIcon],svg[carbon-phone-outgoing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.333 21.482l2.24-2.24a2.17 2.17 0 0 1 2.337-.48l2.728 1.092A2.17 2.17 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.17 2.17 0 0 1 2.012 1.362l1.091 2.728a2.17 2.17 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815"></svg:path><svg:path fill="currentColor" d="M20 4v2h4.586L18 12.586L19.414 14L26 7.414V12h2V4z"></svg:path>`,
})
export class CarbonPhoneOutgoingFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
