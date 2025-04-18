import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeCertificateIcon],svg[material-icon-theme-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff5722" d="M4 6v14a2 2 0 0 0 2 2h12v6l3-2l3 2v-6h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2m2 0h8v2H6Zm0 4h6v2H6Zm0 4h8v2H6Zm10 6H6v-2h10Zm8-6v4l-3-2l-3 2v-4l-4-2l4-2V6l3 2l3-2v4.2l4 1.8Z"></svg:path>`,
})
export class MaterialIconThemeCertificateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
