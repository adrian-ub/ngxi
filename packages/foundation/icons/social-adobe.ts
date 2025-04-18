import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationSocialAdobeIcon],svg[foundation-social-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59.386 18.139L86 81.861V18.139zm-45.386 0v63.722l26.635-63.722zm24.373 50.904h12.409l5.075 12.814H66.97L50.01 41.622z"></svg:path>`,
})
export class FoundationSocialAdobeIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
