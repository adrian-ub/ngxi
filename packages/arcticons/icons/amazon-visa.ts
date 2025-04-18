import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmazonVisaIcon],svg[arcticons-amazon-visa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="24.536" height="14" x="11.753" y="10.668" rx="2.409" ry="2.409"></svg:rect><svg:path d="M14.003 20.84h3.568m2.684-.02h7.492m-15.914-6.285H36.17"></svg:path></svg:g><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M32.28 29.7c1.113-.45 3.092-1.048 3.688-.326c.644.781-.17 2.477-.92 3.794"></svg:path><svg:path d="M11.798 30.223c1.759 1.397 6.954 3.535 12.488 3.535c5.276 0 8.497-1.912 10.167-3.08"></svg:path></svg:g>`,
})
export class ArcticonsAmazonVisaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
