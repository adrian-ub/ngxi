import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCertificate1FilledIcon],svg[tdesign-certificate-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 1v22H3V1zm-4 12H7v2h10zm-2 4H7v2h8zM11 3H7v5.5l2-1.65l2 1.65z"></svg:path>`,
})
export class TdesignCertificate1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
