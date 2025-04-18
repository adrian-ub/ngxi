import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKeepaIcon],svg[arcticons-keepa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.463 18.134H40.5a2 2 0 0 1 2 2v7.732a2 2 0 0 1-2 2H30.463a1.5 1.5 0 0 1-1.5-1.5v-8.732a1.5 1.5 0 0 1 1.5-1.5m-22.963 0h10.037a1.5 1.5 0 0 1 1.5 1.5v8.732a1.5 1.5 0 0 1-1.5 1.5H7.5a2 2 0 0 1-2-2v-7.732a2 2 0 0 1 2-2"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.866 30.464V40.5a2 2 0 0 1-2 2h-7.732c-1.103 0-2-.896-2-2V30.464a1.5 1.5 0 0 1 1.5-1.5h8.732a1.5 1.5 0 0 1 1.5 1.5m0-22.964v10.036a1.5 1.5 0 0 1-1.5 1.5h-8.732a1.5 1.5 0 0 1-1.5-1.5V7.5a2 2 0 0 1 2-2h7.732c1.103 0 2 .896 2 2"></svg:path>`,
})
export class ArcticonsKeepaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
