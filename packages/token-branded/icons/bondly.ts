import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBondlyIcon],svg[token-branded-bondly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBondly0)" fill-rule="evenodd" d="M5.959 5.559L3.177 7.176v9.471l2.747 1.647l4.311-2.547V20.9l1.836 1.1l8.753-5.353v-2.212l-4.112-2.53l4.111-2.558V6.971L12.071 2l-1.836 1.07V8.2zm6.63 8.906l1.752-1.094l4.13 2.452l-5.883 3.412zm0-5.077v-4.44l5.729 3.234l-4.018 2.294l-1.712-1.094zm-7.06-1.112v7.206l4.706-2.676v-1.841z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBondly0" x1="18.158" x2="2.95" y1="4.143" y2="17.082" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1352A2"></svg:stop><svg:stop offset="1" stop-color="#0D2E62"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBondlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
