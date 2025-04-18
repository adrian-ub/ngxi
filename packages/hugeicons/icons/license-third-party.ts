import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLicenseThirdPartyIcon],svg[hugeicons-license-third-party-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M10.47 22c-3.992 0-5.989 0-7.23-1.172C2 19.657 2 17.771 2 14v-4c0-3.771 0-5.657 1.24-6.828C4.481 2 6.478 2 10.47 2h1.06c3.993 0 5.989 0 7.23 1.172C20 4.343 20 6.229 20 10M7 7h8m-8 5h6"></svg:path><svg:path d="M14 22c1.838-2.748 6.119-2.898 8 0m-2-7.071c0 1.065-.895 1.928-2 1.928s-2-.863-2-1.928S16.895 13 18 13s2 .864 2 1.929"></svg:path></svg:g>`,
})
export class HugeiconsLicenseThirdPartyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
