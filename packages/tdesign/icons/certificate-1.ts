import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCertificate1Icon],svg[tdesign-certificate-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v22H3V1zm-8 2v6.5l-3-2.25L7 9.5V3H5v18h14V3zM9 3v2.5l1-.75l1 .75V3zm-2 9h10v2H7zm0 4h8v2H7z"></svg:path>`,
})
export class TdesignCertificate1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
