import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonPhotosIcon],svg[arcticons-amazon-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535a17 17 0 0 0 10.167-3.08"></svg:path><svg:rect width="4" height="5.3" x="20.505" y="20.175" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:rect width="4" height="5.3" x="30.05" y="20.175" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.469 17.475v8m.001-3.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v3.3m17.666-.447a2.25 2.25 0 0 0 1.645.447h.449a1.324 1.324 0 0 0 1.322-1.325h0a1.324 1.324 0 0 0-1.322-1.325h-.897A1.324 1.324 0 0 1 36.01 21.5h0a1.324 1.324 0 0 1 1.322-1.325h.449a2.25 2.25 0 0 1 1.645.447M27.14 18.525v5.95a1 1 0 0 0 1 1h.3m-2.349-5.3h2.1m-19.743 3.3a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-1.3a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2m0-2v8"></svg:path>`,
})
export class ArcticonsAmazonPhotosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
