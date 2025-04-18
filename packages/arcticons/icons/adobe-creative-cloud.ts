import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAdobeCreativeCloudIcon],svg[arcticons-adobe-creative-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.28 33.616c-2.97.107-4.786.276-7.286-1.37a7.97 7.97 0 0 1 5.784-14.456c2.915.503 5.133 3.077 7.601 6.144m-5.193-7.626a9.8 9.8 0 0 1 2.009-1.217a9.57 9.57 0 0 1 13.304 8.753a9.5 9.5 0 0 1-.575 3.382a8.8 8.8 0 0 1-1.53 2.77a9.46 9.46 0 0 1-9.05 3.482c-3.597-.603-6.445-3.928-9.67-7.448"></svg:path>`,
})
export class ArcticonsAdobeCreativeCloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
