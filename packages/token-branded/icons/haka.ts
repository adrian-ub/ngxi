import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedHakaIcon],svg[token-branded-haka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedHaka0)" d="M11.47 6.708H5.12v3.704h3.175v3.24l1.059 2.053V9.354H6.178V7.766h4.234v10.585l1.059 2.032zm7.41 2.646v1.058h-2.646v3.15l-.042.02l.042.006l-2.646 4.763l-1.059 2.117V6.708h6.351v1.058h-5.292v8.643l1.588-2.954V9.354z"></svg:path><svg:path fill="url(#tokenBrandedHaka1)" d="M12.545 20.982A8.997 8.997 0 0 0 19.41 6.893v1.403h-.99q.149.261.275.53h.715V12a7.41 7.41 0 0 1-5.865 7.25zm-.28.01v-1.587a7 7 0 0 1-.53 0v1.588q.265.007.53 0m-.81-.01A8.997 8.997 0 0 1 4.59 6.893v5.108a7.41 7.41 0 0 0 5.865 7.25zm7.41-14.803A9 9 0 0 0 12 3.003A8.97 8.97 0 0 0 5.14 6.18h2.277A7.37 7.37 0 0 1 12 4.59a7.37 7.37 0 0 1 4.583 1.588z"></svg:path><svg:path fill="url(#tokenBrandedHaka2)" d="M14.111 20.749a9 9 0 0 0 6.828-7.727a24 24 0 0 1-1.673.428a7.42 7.42 0 0 1-5.15 5.653v1.64z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedHaka0" x1="20.19" x2="3.256" y1="5.259" y2="5.259" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4FB585"></svg:stop><svg:stop offset=".47" stop-color="#D41B81"></svg:stop><svg:stop offset="1" stop-color="#7826F4"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedHaka1" x1="20.468" x2="4.167" y1="10.291" y2="11.006" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#17B372"></svg:stop><svg:stop offset=".51" stop-color="#402284"></svg:stop><svg:stop offset="1" stop-color="#1CADDB"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedHaka2" x1="13.778" x2="20.415" y1="20.748" y2="13.524" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#3A3781"></svg:stop><svg:stop offset=".46" stop-color="#C03281"></svg:stop><svg:stop offset="1" stop-color="#17B372"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedHakaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
