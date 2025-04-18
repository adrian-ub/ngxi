import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClashMetaIcon],svg[arcticons-clash-meta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.1 35.17H5.686m9.282 2.993l-8.846 3.163M24 16.874c.801 0 2.551.256 2.551.256L37.746 6.674s3.295.341 4.754.852V31.63c-1.42.653-4.574 1.108-6.45 1.108V17.11l-7.756 7.302S25.708 23.56 24 23.56s-4.294.853-4.294.853L11.95 17.11v15.627c-1.876 0-5.03-.455-6.45-1.108V7.526c1.458-.511 4.754-.852 4.754-.852L21.45 17.13s1.75-.256 2.551-.256m.625 17.245L24 35.265l-.626-1.146M32.9 35.17h9.414m-9.282 2.993l8.846 3.163"></svg:path>`,
})
export class ArcticonsClashMetaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
