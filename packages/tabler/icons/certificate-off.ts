import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCertificateOffIcon],svg[tabler-certificate-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12.876 12.881a3 3 0 0 0 4.243 4.243m.588-3.42a3 3 0 0 0-1.437-1.423"></svg:path><svg:path d="M13 17.5V22l2-1.5l2 1.5v-4.5M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2m4 0h10a2 2 0 0 1 2 2v10M6 9h3m4 0h5M6 12h3m-3 3h2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerCertificateOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
