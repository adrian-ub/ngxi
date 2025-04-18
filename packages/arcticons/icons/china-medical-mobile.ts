import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChinaMedicalMobileIcon],svg[arcticons-china-medical-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 12.287l-1.63-1.63c-3.86-3.86-10.116-3.86-13.975 0s-3.86 10.115 0 13.974l1.63 1.63l15.598-15.597c3.866-3.866 10.123-3.866 13.982-.007s3.86 10.116 0 13.975L24 40.238"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.506 15.78l-1.63-1.63a4.94 4.94 0 1 0-6.988 6.988l1.63 1.63m3.494-3.493l-1.63-1.63m1.63 15.605l15.606-15.606M13.52 29.756L29.124 14.15a4.94 4.94 0 1 1 6.988 6.987L20.507 36.744"></svg:path>`,
})
export class ArcticonsChinaMedicalMobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
