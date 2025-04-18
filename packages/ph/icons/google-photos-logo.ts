import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGooglePhotosLogoIcon],svg[ph-google-photos-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 120h-39.51A72 72 0 0 0 128 16a8 8 0 0 0-8 8v39.51A72 72 0 0 0 16 128a8 8 0 0 0 8 8h39.51A72 72 0 0 0 128 240a8 8 0 0 0 8-8v-39.51A72 72 0 0 0 240 128a8 8 0 0 0-8-8m-48-32a55.3 55.3 0 0 1-10 32h-38V32.57A56.09 56.09 0 0 1 184 88M88 72a55.3 55.3 0 0 1 32 10v38H32.57A56.09 56.09 0 0 1 88 72m-16 96a55.3 55.3 0 0 1 10-32h38v87.43A56.09 56.09 0 0 1 72 168m96 16a55.3 55.3 0 0 1-32-10v-38h87.43A56.09 56.09 0 0 1 168 184"></svg:path>`,
})
export class PhGooglePhotosLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
