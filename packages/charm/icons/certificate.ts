import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmCertificateIcon],svg[charm-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11.25 1.75h-8.5v11.5h2.5m3.5-3.5l-.5 4.5l2.25-1l2.25 1l-.5-4.5"></svg:path><svg:circle cx="10.5" cy="7.5" r="2.75"></svg:circle></svg:g>`,
})
export class CharmCertificateIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
