import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAuShortIcon],svg[arcticons-au-short-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.851 25.432c1.136-.616 1.136-2.246 0-2.862L11.112 6.4C8.942 5.22 6.3 6.79 6.3 9.261v29.478c0 2.47 2.643 4.04 4.813 2.86zM6.297 22.52l11.066 6.017m-2.026-10.471l19.531 10.62"></svg:path>`,
})
export class ArcticonsAuShortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
