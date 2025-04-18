import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonAppstoreIcon],svg[arcticons-amazon-appstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.356 23.475a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-1.3a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2m0-2v8m6.063-4.7a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-1.3a2 2 0 0 0-2-2h0a2 2 0 0 0-2 2m0-2v8m-8.244-4.7a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-1.3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2m0 3.3v-5.3m14.235 4.853a2.25 2.25 0 0 0 1.644.447h.449a1.324 1.324 0 0 0 1.322-1.325h0a1.324 1.324 0 0 0-1.322-1.325h-.898a1.324 1.324 0 0 1-1.322-1.325h0a1.324 1.324 0 0 1 1.322-1.325h.449a2.25 2.25 0 0 1 1.645.447"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535a17 17 0 0 0 10.167-3.08"></svg:path>`,
})
export class ArcticonsAmazonAppstoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
