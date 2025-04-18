import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedStrongIcon],svg[token-branded-strong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1668B0" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-1.059 0A7.941 7.941 0 1 1 4.06 12a7.941 7.941 0 0 1 15.882 0m-5.974-5.294l3.327 2.489v.158H9.353V12h4.765v2.12H6.706V6.706zM9.882 9.882h7.412v7.412H9.991l-3.285-2.457v-.188h7.941v-3.178H9.882z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedStrongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
