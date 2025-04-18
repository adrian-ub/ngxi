import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPolypadIcon],svg[token-branded-polypad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPolypad0)" d="M19.94 16.495v-9L12 3L4.059 7.495v9l2.647 1.487V8.998L12 5.981l5.294 3.017v6.004L12 18.009V21z"></svg:path><svg:path fill="url(#tokenBrandedPolypad1)" d="M15.706 9.918L12 7.838l-3.706 2.08v9l2.117 1.143v-8.984L12 10.151l1.588.926v1.843L12 13.846v2.303l3.706-2.07z"></svg:path><svg:path fill="#fff" d="M19.94 7.495L12 3L4.059 7.495l2.636 1.503L12 5.981l5.304 3.017z"></svg:path><svg:path fill="#fff" d="M11.999 7.837L8.325 9.918l2.043 1.16l1.63-.932l1.632.926l2.075-1.154z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPolypad0" x1="15.97" x2="8.252" y1="5.25" y2="18.872" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4E4AFF"></svg:stop><svg:stop offset="1" stop-color="#A873FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedPolypad1" x1="15.925" x2="9.381" y1="4.534" y2="21.346" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4E4AFF"></svg:stop><svg:stop offset="1" stop-color="#A873FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPolypadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
