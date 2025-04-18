import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSparkasseSIdentityIcon],svg[arcticons-sparkasse-s-identity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.1 37.1h14.3m9-31.6v13.1m3.8 0V5.5h3c3.2 0 5.7 2.6 5.7 5.7v1.6c0 3.2-2.6 5.7-5.7 5.7h-3Z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9 26.4h12.4c1.7 0 3.1 1.4 3.1 3.1v9.9c0 1.7-1.4 3.1-3.1 3.1H9c-1.7 0-3.1-1.4-3.1-3.1v-9.9c0-1.7 1.4-3.1 3.1-3.1m1.3 5.4h14.3M5.9 37.1h14.3"></svg:path><svg:circle cx="15.2" cy="23.3" r="3.1"></svg:circle></svg:g>`,
})
export class ArcticonsSparkasseSIdentityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
