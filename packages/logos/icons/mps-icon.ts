import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosMpsIconIcon],svg[logos-mps-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="logosMpsIcon0" x1="75.7%" x2="-19.467%" y1="132.917%" y2="11.033%"><svg:stop offset="6%" stop-color="#087CFA"></svg:stop><svg:stop offset="87%" stop-color="#21D789"></svg:stop></svg:lineargradient><svg:lineargradient id="logosMpsIcon1" x1="76.465%" x2="28.668%" y1="92.417%" y2="-29.467%"><svg:stop offset="5%" stop-color="#087CFA"></svg:stop><svg:stop offset="18%" stop-color="#0A84F0"></svg:stop><svg:stop offset="39%" stop-color="#1099D6"></svg:stop><svg:stop offset="67%" stop-color="#19BAAD"></svg:stop><svg:stop offset="87%" stop-color="#21D789"></svg:stop></svg:lineargradient><svg:lineargradient id="logosMpsIcon2" x1="33.801%" x2="64.854%" y1="103.028%" y2="-21.398%"><svg:stop offset="12%" stop-color="#21D789"></svg:stop><svg:stop offset="36%" stop-color="#6AE274"></svg:stop><svg:stop offset="58%" stop-color="#A9EB62"></svg:stop><svg:stop offset="77%" stop-color="#D6F255"></svg:stop><svg:stop offset="92%" stop-color="#F2F64D"></svg:stop><svg:stop offset="100%" stop-color="#FCF84A"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#logosMpsIcon0)" d="M0 256h256L127.403 127.659L0 0z"></svg:path><svg:path fill="url(#logosMpsIcon1)" d="M256 256L127.403 127.659L256 0z"></svg:path><svg:path fill="url(#logosMpsIcon2)" d="m191.573 191.616l-64.17-63.957L256 0z"></svg:path>`,
})
export class LogosMpsIconIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
