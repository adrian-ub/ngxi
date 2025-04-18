import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCertificateFilledIcon],svg[tdesign-certificate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v18H1zm4 8v2h6v-2zm0 4v2h14v-2zm11.502-6.312L19 10.75V5h-4.996v5.75z"></svg:path>`,
})
export class TdesignCertificateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
