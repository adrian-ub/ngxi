import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignLogoAdobeIllustrateIcon],svg[tdesign-logo-adobe-illustrate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm4.756 2h2.488l3.6 12h-2.091l-1.183-3.945H8.428L7.244 18H5.153zm.272 6.055h1.943L10 8.815zM15.996 9H18v2.004h-2.004zM18 12v6h-2v-6z"></svg:path>`,
})
export class TdesignLogoAdobeIllustrateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
