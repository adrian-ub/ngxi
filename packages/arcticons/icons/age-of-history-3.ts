import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAgeOfHistory3Icon],svg[arcticons-age-of-history-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.499 18h4.363m-4.363 12h4.363m-2.181-12v12m6.137-12h4.364m-4.364 12h4.364M24 18v12m6.138-12h4.363m-4.363 12h4.363m-2.182-12v12"></svg:path>`,
})
export class ArcticonsAgeOfHistory3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
