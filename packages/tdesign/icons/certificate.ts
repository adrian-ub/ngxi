import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCertificateIcon],svg[tdesign-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm2 2v14h18V5h-2v6.5l-3-2.25l-3 2.25V5zm12 0v2.5l1-.75l1 .75V5zM5 11h6v2H5zm0 4h14v2H5z"></svg:path>`,
})
export class TdesignCertificateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
