import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSethIcon],svg[token-branded-seth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSeth0)" fill-rule="evenodd" d="M12 19.941a7.942 7.942 0 1 0 0-15.883a7.942 7.942 0 0 0 0 15.883M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path><svg:path fill="#627EEA" d="M12 18.883a6.882 6.882 0 1 0 0-13.765a6.882 6.882 0 0 0 0 13.765"></svg:path><svg:path fill="#fff" d="M12.002 10.677v-3.97L8.825 12z"></svg:path><svg:path fill="#C1CCF7" d="M12.002 10.677v-3.97L15.178 12zm0 0L8.825 12l3.177 1.853z"></svg:path><svg:path fill="#8198EE" d="M12 13.852v-3.176l3.177 1.323z"></svg:path><svg:path fill="#fff" d="m12.002 14.647l-3.177-2.118l3.177 4.765z"></svg:path><svg:path fill="#C1CCF7" d="M15.177 12.53L12 14.646v2.647z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSeth0" x1="17.029" x2="6.706" y1="5.118" y2="19.147" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#269981"></svg:stop><svg:stop offset="1" stop-color="#142D44"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSethIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
