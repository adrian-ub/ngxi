import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDocomoSpeedtestIcon],svg[arcticons-docomo-speedtest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.468 16.532c-3.904 2.254-9.366 5.119-10.795 6.549a3.003 3.003 0 1 0 4.246 4.246c1.51-1.51 4.32-6.934 6.55-10.795"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 2.5c-5.515 0-11.031 2.094-15.218 6.282c-8.376 8.375-8.376 22.06 0 30.436a3.504 3.504 0 0 0 4.954-4.954a14.464 14.464 0 0 1 0-20.529a14.464 14.464 0 0 1 20.528 0a14.464 14.464 0 0 1 0 20.53a3.504 3.504 0 0 0 4.954 4.953c8.376-8.375 8.376-22.06 0-30.436C35.032 4.594 29.516 2.5 24 2.5m15.218 6.282l-4.954 4.954"></svg:path>`,
})
export class ArcticonsDocomoSpeedtestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
