import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoBoldIcon],svg[ph-google-photos-logo-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 116h-33.36A76 76 0 0 0 128 12a12 12 0 0 0-12 12v33.36A76 76 0 0 0 12 128a12 12 0 0 0 12 12h33.36A76 76 0 0 0 128 244a12 12 0 0 0 12-12v-33.36A76 76 0 0 0 244 128a12 12 0 0 0-12-12m-52-28a51.4 51.4 0 0 1-8.18 28H140V37.4A52.09 52.09 0 0 1 180 88M88 76a51.4 51.4 0 0 1 28 8.18V116H37.4A52.09 52.09 0 0 1 88 76m-12 92a51.4 51.4 0 0 1 8.18-28H116v78.6A52.09 52.09 0 0 1 76 168m92 12a51.4 51.4 0 0 1-28-8.18V140h78.6a52.09 52.09 0 0 1-50.6 40"></svg:path>`,
})
export class PhGooglePhotosLogoBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
