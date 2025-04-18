import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAitIcon],svg[token-branded-ait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAit0)" d="M10.3 6.584A1.58 1.58 0 0 0 9.35 6h3.654c.585 0 .97.55 1.09.82L18 13.95v3.126c-.085.615-.47.93-.905.93c-.35 0-.875-.575-1-.86L11.049 7.51l-.745-.925z"></svg:path><svg:path fill="url(#tokenBrandedAit1)" d="M12.215 15.5h-5.5c-.166.08-.52.25-.566.285c-.04.035-.335 1.49-.475 2.215h7.49c.186 0 .3-.205.21-.37z"></svg:path><svg:path fill="url(#tokenBrandedAit2)" d="M6.784 15.58c-.95 1.83.84 2.41.885 2.42H4.314C2.8 18 2.9 16.78 3.14 16.17c1.585-2.996 4.78-9.05 4.89-9.306C8.164 6.544 8.55 6 9.2 6c.52 0 .88.285.99.425l.85 1.075c-1.1 2.085-3.5 6.616-4.255 8.08"></svg:path><svg:path fill="url(#tokenBrandedAit3)" d="M21 17.261c0 .41-.325.74-.725.74H17.03c.665 0 .91-.6.97-.9V6.571c0-.316.29-.576.6-.576h1.835A.57.57 0 0 1 21 6.57z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAit0" x1="5.185" x2="13.942" y1="6.649" y2="20.893" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#06A9EE"></svg:stop><svg:stop offset="1" stop-color="#00529B"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAit1" x1="4.176" x2="20.637" y1="11.519" y2="11.519" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#134491"></svg:stop><svg:stop offset="1" stop-color="#00ADF0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAit2" x1="11.999" x2="11.999" y1="5.994" y2="18.005" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0458A0"></svg:stop><svg:stop offset="1" stop-color="#00ACE8"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAit3" x1="19.005" x2="19.005" y1="6" y2="18.001" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#05599F"></svg:stop><svg:stop offset="1" stop-color="#00ADF0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
