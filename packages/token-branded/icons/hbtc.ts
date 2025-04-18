import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedHbtcIcon],svg[token-branded-hbtc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#F89828" fill-rule="evenodd" d="M14.594 21c2.829 0 5.117-2.247 5.117-5.02a5.07 5.07 0 0 0-5.117-5.013a5.065 5.065 0 0 0-5.112 5.014a5.06 5.06 0 0 0 3.17 4.651a5.1 5.1 0 0 0 1.942.368m.638-8.249l-.576-.154l-.242.843l-1.44-.396l-.241.844l.576.159a.284.284 0 0 1 .205.36l-.648 2.258a.3.3 0 0 1-.365.205l-.288-.082l-.53.766l1.44.396l-.246.849l.576.154l.241-.843l.288.077l-.241.848l.575.155l.242-.844l.576.16a1.4 1.4 0 0 0 1.671-.967c.165-.566-.092-1.09-.565-1.399a1.168 1.168 0 0 0-.103-2.222l-.283-.082l.242-.843l-.576-.16l-.242.844l-.288-.077zm.375 1.929l-.858-.237l-.247.849l.864.236a.446.446 0 0 0 .514-.643a.44.44 0 0 0-.268-.205zm-.34 1.733l-1.007-.278l-.324 1.131l1.008.273a.588.588 0 1 0 .324-1.132z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedHbtc0)" d="M10.368 10.966c.257-.957.488-3.425 1.06-4.86A22.3 22.3 0 0 0 13.7 9.608c-1.216.13-2.371.6-3.332 1.358"></svg:path><svg:path fill="url(#tokenBrandedHbtc1)" d="M5.98 10.488C7.307 8.718 9.189 6.446 9.888 3c.484 1.301.941 5.112-1.136 9.956c-1.816 4.217.16 6.85 1.62 8.043c-6.063-.195-7.73-6.053-4.387-10.511z"></svg:path><svg:path fill="url(#tokenBrandedHbtc2)" d="M5.842 15.98c-.113 1.147-.036 2.433.452 3.657c.998.802 2.366 1.306 4.073 1.362c-1.46-1.193-3.435-3.82-1.62-8.043c2.037-4.751 1.64-8.51 1.162-9.873c.042 2.818-1.028 4.998-2.087 7.163c-.885 1.805-1.764 3.6-1.98 5.734m6.053-5.909a27 27 0 0 0-.535-3.785a20 20 0 0 0-.71 3.194c-.103.612-.19 1.142-.283 1.486c.35-.298.89-.632 1.527-.895"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedHbtc0" x1="9.549" x2="11.915" y1="3.876" y2="18.557" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#96CAFF"></svg:stop><svg:stop offset="1" stop-color="#82B0F9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedHbtc1" x1="19.085" x2="18" y1="3.957" y2="21.373" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7EB5FE"></svg:stop><svg:stop offset="1" stop-color="#246FFE"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedHbtc2" x1="9.961" x2="9.262" y1="3.798" y2="20.923" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#81B0FA"></svg:stop><svg:stop offset="1" stop-color="#0E33E8"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedHbtcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
