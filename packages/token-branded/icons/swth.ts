import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSwthIcon],svg[token-branded-swth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#0D4947" fill-opacity=".53" d="M5.245 13.688H3.557c.9 1.125 2.065 1.592 2.532 1.688z"></svg:path><svg:path fill="url(#tokenBrandedSwth0)" d="M5.864 15.433a5.3 5.3 0 0 0 2.758.506c3.376-.281 5.626-3.095 5.626-3.939c1.013.17 3.292.17 5.053-.973A7.316 7.316 0 1 0 5.87 15.433z"></svg:path><svg:path fill="url(#tokenBrandedSwth1)" d="M19.266 10.508c-1.778.732-4.513.929-5.852.929a11.1 11.1 0 0 1-4.828 4.501h.045c3.377-.281 5.627-3.095 5.627-3.939c1.013.17 3.292.17 5.053-.973a7 7 0 0 0-.045-.518"></svg:path><svg:path fill="url(#tokenBrandedSwth2)" d="M11.811 19.876c5.076 0 9.189-3.922 9.189-8.755v-.248c-1.632 1.436-3.472 2.206-5.908 1.97c-.377 1.463-1.97 4.22-5.34 4.22c-2.886 0-5.402-1.924-6.752-3.46c1.12 3.629 4.636 6.273 8.806 6.273z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSwth0" x1="17.203" x2="3.51" y1="5.621" y2="16.918" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D1FAFE"></svg:stop><svg:stop offset=".12" stop-color="#E9FDFE"></svg:stop><svg:stop offset=".28" stop-color="#A6EAED"></svg:stop><svg:stop offset=".43" stop-color="#77D4D7"></svg:stop><svg:stop offset=".65" stop-color="#5DC8C8"></svg:stop><svg:stop offset=".84" stop-color="#439CBA"></svg:stop><svg:stop offset="1" stop-color="#3B7DB2"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSwth1" x1="20.527" x2="-.171" y1="4.367" y2="10.354" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#55A6AD"></svg:stop><svg:stop offset=".16" stop-color="#9CB6BA"></svg:stop><svg:stop offset=".57" stop-color="#4092A0"></svg:stop><svg:stop offset="1" stop-color="#35729F"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSwth2" x1="20.522" x2="6.1" y1="11.42" y2="17.952" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8CF2FC"></svg:stop><svg:stop offset=".39" stop-color="#A6F3FB"></svg:stop><svg:stop offset=".86" stop-color="#46A7BA"></svg:stop><svg:stop offset="1" stop-color="#3B7CB2"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSwthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
