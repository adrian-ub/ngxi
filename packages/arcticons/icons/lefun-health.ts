import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLefunHealthIcon],svg[arcticons-lefun-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.846 25.673c-4.461-4.461-4.461-11.694 0-16.154s11.693-4.461 16.154 0M7.846 25.673L24 41.827l16.154-16.154"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M40.154 25.673L24 41.827L7.846 25.673m5.384-5.385a3.808 3.808 0 1 1 5.385-5.385M24 9.518l-10.77 10.77m26.924 5.385c4.461-4.461 4.461-11.694 0-16.154S28.461 5.057 24 9.519"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.23 31.058l16.155-16.155a3.808 3.808 0 1 1 5.384 5.385L24 31.058"></svg:path>`,
})
export class ArcticonsLefunHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
