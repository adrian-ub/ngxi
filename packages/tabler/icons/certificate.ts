import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCertificateIcon],svg[tabler-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 15a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></svg:path><svg:path d="M13 17.5V22l2-1.5l2 1.5v-4.5"></svg:path><svg:path d="M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-1 1.73M6 9h12M6 12h3m-3 3h2"></svg:path></svg:g>`,
})
export class TablerCertificateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
