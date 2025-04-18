import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobeIllustrateFilledIcon],svg[tdesign-logo-adobe-illustrate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.97 12.055H9.028L10 8.815z"></svg:path><svg:path fill="currentColor" d="M22 2v20H2V2zM11.244 6H8.756L5.152 18h2.092l1.183-3.945h3.143L12.752 18h2.092zM18 9h-2.004v2.004H18zm0 9v-6h-2v6z"></svg:path>`,
})
export class TdesignLogoAdobeIllustrateFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
