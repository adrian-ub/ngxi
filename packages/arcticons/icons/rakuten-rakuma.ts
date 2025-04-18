import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRakutenRakumaIcon],svg[arcticons-rakuten-rakuma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.716 8.5h30.568c2.336 0 4.216 1.495 4.216 3.351V36.15c0 1.856-1.88 3.351-4.216 3.351H8.716C6.38 39.5 4.5 38.005 4.5 36.15v-24.3c0-1.855 1.88-3.35 4.216-3.35m21.784 0v31m-13-31v31m-2.275-19.352l-8.277.648"></svg:path><svg:path d="M8 18.668v-6.821h2.275c1.314 0 2.364 1.023 2.364 2.302s-1.05 2.302-2.364 2.302H8m2.361-.001l2.19 2.133"></svg:path></svg:g>`,
})
export class ArcticonsRakutenRakumaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
